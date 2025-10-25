import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Schema for AI-processed project data
const processedProjectSchema = z.object({
  summary: z.string().describe('A concise 2-3 sentence summary of the project'),
  keyFeatures: z.array(z.string()).describe('3-5 key features or capabilities of the project'),
  x402Integration: z.string().describe('How the project specifically uses or integrates with x402'),
  category: z.string().describe('Refined category based on the project description'),
  maturity: z.enum(['early-stage', 'beta', 'production', 'established']).describe('Project maturity level'),
  targetAudience: z.string().describe('Primary target audience or use case'),
  technicalComplexity: z.enum(['simple', 'moderate', 'complex', 'enterprise']).describe('Technical complexity level'),
  recommendedAction: z.enum(['approve', 'review', 'request-info', 'decline']).describe('Recommended action for this submission'),
  adminNotes: z.string().describe('Internal notes for admin review'),
});

type ProcessedProject = z.infer<typeof processedProjectSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input data
    const inputSchema = z.object({
      projectName: z.string(),
      description: z.string(),
      website: z.string().optional(),
      category: z.string(),
      teamSize: z.string(),
      contactEmail: z.string().email(),
      contactName: z.string(),
      additionalInfo: z.string().optional(),
    });

    const validatedData = inputSchema.parse(body);

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Use AI to process and analyze the project submission
    const { object: processedProject } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: processedProjectSchema,
      prompt: `
        Analyze this project submission for the x402 ecosystem:

        Project Name: ${validatedData.projectName}
        Description: ${validatedData.description}
        Website: ${validatedData.website || 'Not provided'}
        Category: ${validatedData.category}
        Team Size: ${validatedData.teamSize}
        Contact: ${validatedData.contactName} (${validatedData.contactEmail})
        Additional Info: ${validatedData.additionalInfo || 'None'}

        Please analyze this submission and provide:
        1. A clear summary of what this project does
        2. Key features and capabilities
        3. How it integrates with x402 protocol
        4. Appropriate categorization
        5. Maturity assessment
        6. Target audience analysis
        7. Technical complexity evaluation
        8. Recommended action (approve/review/request-info/decline)
        9. Internal notes for admin review

        Be thorough but concise. Focus on the project's value to the x402 ecosystem.
      `,
    });

    // Send email notification to admin
    if (resend) {
      const emailContent = `
        <h2>New Project Submission: ${validatedData.projectName}</h2>
        
        <h3>Project Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${validatedData.projectName}</li>
          <li><strong>Contact:</strong> ${validatedData.contactName} (${validatedData.contactEmail})</li>
          <li><strong>Category:</strong> ${validatedData.category}</li>
          <li><strong>Team Size:</strong> ${validatedData.teamSize}</li>
          <li><strong>Website:</strong> ${validatedData.website || 'Not provided'}</li>
        </ul>

        <h3>Description:</h3>
        <p>${validatedData.description}</p>

        ${validatedData.additionalInfo ? `
        <h3>Additional Information:</h3>
        <p>${validatedData.additionalInfo}</p>
        ` : ''}

        <h3>AI Analysis:</h3>
        <ul>
          <li><strong>Summary:</strong> ${processedProject.summary}</li>
          <li><strong>Key Features:</strong> ${processedProject.keyFeatures.join(', ')}</li>
          <li><strong>X402 Integration:</strong> ${processedProject.x402Integration}</li>
          <li><strong>Maturity:</strong> ${processedProject.maturity}</li>
          <li><strong>Target Audience:</strong> ${processedProject.targetAudience}</li>
          <li><strong>Technical Complexity:</strong> ${processedProject.technicalComplexity}</li>
          <li><strong>Recommended Action:</strong> ${processedProject.recommendedAction}</li>
          <li><strong>Admin Notes:</strong> ${processedProject.adminNotes}</li>
        </ul>

        <hr>
        <p><em>This submission was automatically processed by the x402 ecosystem AI agent.</em></p>
      `;

      // Send email to admin
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@x402.solutions',
        to: process.env.EMAIL_TO || 'admin@x402.solutions',
        subject: `New Project Submission: ${validatedData.projectName}`,
        html: emailContent,
      });

      // Send confirmation email to submitter
      const confirmationContent = `
        <h2>Thank you for submitting ${validatedData.projectName}!</h2>
        
        <p>We've received your project submission for the x402 ecosystem. Our team will review it and get back to you within 2-3 business days.</p>

        <h3>What happens next?</h3>
        <ul>
          <li>Our AI agent has analyzed your submission</li>
          <li>The project details have been forwarded to our review team</li>
          <li>We'll evaluate how your project fits into the x402 ecosystem</li>
          <li>You'll receive an update via email with next steps</li>
        </ul>

        <h3>Your Submission Summary:</h3>
        <p><strong>Project:</strong> ${validatedData.projectName}</p>
        <p><strong>Category:</strong> ${validatedData.category}</p>
        <p><strong>Status:</strong> Under Review</p>

        <hr>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,<br>The x402 Ecosystem Team</p>
      `;

      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@x402.solutions',
        to: validatedData.contactEmail,
        subject: `Project Submission Confirmation: ${validatedData.projectName}`,
        html: confirmationContent,
      });
    }

    // Log the submission for future reference
    console.log('Project submission processed:', {
      projectName: validatedData.projectName,
      contactEmail: validatedData.contactEmail,
      aiAnalysis: processedProject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Project submitted successfully',
      processedData: processedProject,
    });

  } catch (error) {
    console.error('Error processing project submission:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process project submission',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
