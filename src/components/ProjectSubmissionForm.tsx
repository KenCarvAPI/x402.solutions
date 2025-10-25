'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const projectSchema = z.object({
  projectName: z.string().min(2, 'Project name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  category: z.enum(['payment', 'wallet', 'defi', 'nft', 'gaming', 'social', 'other']),
  teamSize: z.enum(['1', '2-5', '6-10', '11-25', '25+']),
  contactEmail: z.string().email('Please enter a valid email address'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  additionalInfo: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export default function ProjectSubmissionForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    setFormState({ status: 'submitting', message: 'Processing your submission...' });
    
    try {
      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({ 
          status: 'success', 
          message: 'Thank you! Your project has been submitted successfully. We\'ll review it and add it to the ecosystem soon.' 
        });
        reset();
      } else {
        setFormState({ 
          status: 'error', 
          message: result.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setFormState({ 
        status: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    }
  };

  return (
    <div id="contact-form" className="max-w-2xl mx-auto card p-8">
      <div className="text-center mb-8">
        <h2 className="text-heading-3 text-foreground mb-3">Submit Your Project</h2>
        <p className="text-body-small text-text-muted">
          Join the x402 ecosystem by submitting your project. Our AI agent will process your submission and help showcase your work.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName" className="block text-sm font-semibold text-foreground mb-2">
            Project Name *
          </label>
          <input
            {...register('projectName')}
            type="text"
            id="projectName"
            className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
            placeholder="Enter your project name"
          />
          {errors.projectName && (
            <p className="mt-1 text-sm text-red-600">{errors.projectName.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
            Project Description *
          </label>
          <textarea
            {...register('description')}
            id="description"
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none hover:border-primary/50"
            placeholder="Describe your project, its features, and how it uses x402..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-semibold text-foreground mb-2">
            Website URL
          </label>
          <input
            {...register('website')}
            type="url"
            id="website"
            className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
            placeholder="https://yourproject.com"
          />
          {errors.website && (
            <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
          )}
        </div>

        {/* Category and Team Size */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-2">
              Category *
            </label>
            <select
              {...register('category')}
              id="category"
              className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
            >
              <option value="">Select a category</option>
              <option value="payment">Payment Processing</option>
              <option value="wallet">Wallet Integration</option>
              <option value="defi">DeFi Protocol</option>
              <option value="nft">NFT Platform</option>
              <option value="gaming">Gaming</option>
              <option value="social">Social Platform</option>
              <option value="other">Other</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="teamSize" className="block text-sm font-semibold text-foreground mb-2">
              Team Size *
            </label>
            <select
              {...register('teamSize')}
              id="teamSize"
              className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
            >
              <option value="">Select team size</option>
              <option value="1">Solo Developer</option>
              <option value="2-5">2-5 People</option>
              <option value="6-10">6-10 People</option>
              <option value="11-25">11-25 People</option>
              <option value="25+">25+ People</option>
            </select>
            {errors.teamSize && (
              <p className="mt-1 text-sm text-red-600">{errors.teamSize.message}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactName" className="block text-sm font-semibold text-foreground mb-2">
              Contact Name *
            </label>
            <input
              {...register('contactName')}
              type="text"
              id="contactName"
              className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
              placeholder="Your full name"
            />
            {errors.contactName && (
              <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-sm font-semibold text-foreground mb-2">
              Contact Email *
            </label>
            <input
              {...register('contactEmail')}
              type="email"
              id="contactEmail"
              className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-body-small hover:border-primary/50"
              placeholder="your@email.com"
            />
            {errors.contactEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.contactEmail.message}</p>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-semibold text-foreground mb-2">
            Additional Information
          </label>
          <textarea
            {...register('additionalInfo')}
            id="additionalInfo"
            rows={3}
            className="w-full px-4 py-3 border border-border rounded-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none hover:border-primary/50"
            placeholder="Any additional details, milestones, or special requirements..."
          />
        </div>

        {/* Status Message */}
        {formState.status !== 'idle' && (
          <div className={`p-4 rounded-lg flex items-center space-x-2 ${
            formState.status === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : formState.status === 'error'
              ? 'bg-red-50 text-red-800 border border-red-200'
              : 'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            {formState.status === 'success' && <CheckCircle className="w-5 h-5" />}
            {formState.status === 'error' && <AlertCircle className="w-5 h-5" />}
            {formState.status === 'submitting' && <Loader2 className="w-5 h-5 animate-spin" />}
            <span className="text-sm font-medium">{formState.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className="w-full bg-primary text-white py-4 px-6 rounded-button font-semibold hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 disabled:hover:transform-none"
        >
          {formState.status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Project</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-text-muted">
        <p>
          By submitting this form, you agree to have your project reviewed and potentially featured on our ecosystem page.
        </p>
      </div>
    </div>
  );
}
