# X402 Ecosystem Landing Page

A clean, modern landing page for the x402 protocol ecosystem, showcasing projects building on x402 and providing a self-registration system for new projects.

## Features

- 🎨 Clean, modern design inspired by Coinbase's x402 page
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and Tailwind CSS
- 🤖 AI-powered project submission processing
- 📧 Automated email notifications and confirmations
- 📝 Comprehensive project submission form with validation
- 🔍 Project showcase with filtering capabilities
- ⚡ Real-time form validation and user feedback

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   # OpenAI API Key (for AI processing)
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Resend API Key (for email sending)
   RESEND_API_KEY=your_resend_api_key_here
   
   # Email Configuration
   EMAIL_FROM=noreply@x402.solutions
   EMAIL_TO=admin@x402.solutions
   
   # Site Configuration
   SITE_URL=http://localhost:3000
   SITE_NAME=X402 Ecosystem
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables:**
   In Vercel dashboard, add these environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   RESEND_API_KEY=your_resend_api_key_here
   EMAIL_FROM=noreply@yourdomain.com
   EMAIL_TO=admin@yourdomain.com
   SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required for AI processing
OPENAI_API_KEY=your_openai_api_key_here

# Required for email functionality
RESEND_API_KEY=your_resend_api_key_here

# Email configuration
EMAIL_FROM=noreply@x402.solutions
EMAIL_TO=admin@x402.solutions

# Site configuration
SITE_URL=https://your-domain.com
SITE_NAME=X402 Ecosystem
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── components/          # Reusable components (to be added)
└── lib/                # Utility functions (to be added)
```

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **AI Processing:** OpenAI GPT-4o-mini
- **Form Handling:** React Hook Form + Zod validation
- **Email:** Resend
- **Deployment:** Vercel (recommended)

## Development Roadmap

- [x] Basic project setup
- [x] Landing page design
- [x] AI-powered contact form implementation
- [x] Email processing system
- [x] Responsive design and SEO optimization
- [x] Deployment configuration
- [ ] Project management dashboard

## Contributing

This project is designed to be simple and maintainable. Feel free to submit issues and enhancement requests.

## License

MIT License - see LICENSE file for details.
