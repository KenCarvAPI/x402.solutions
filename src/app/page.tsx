'use client';

import { ArrowRight, Globe, Zap, Shield, Menu, X } from "lucide-react";
import ProjectSubmissionForm from "@/components/ProjectSubmissionForm";
import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-semibold text-foreground">x402</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a href="#ecosystem" className="text-text-muted hover:text-foreground transition-colors text-sm font-semibold tracking-wide">Ecosystem</a>
              <a href="#submit" className="text-text-muted hover:text-foreground transition-colors text-sm font-semibold tracking-wide">Submit Project</a>
              <a href="#docs" className="text-text-muted hover:text-foreground transition-colors text-sm font-semibold tracking-wide">Documentation</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <nav className="flex flex-col space-y-3 pt-4">
                <a 
                  href="#ecosystem" 
                  className="text-text-muted hover:text-foreground transition-colors py-2 text-sm font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ecosystem
                </a>
                <a 
                  href="#submit" 
                  className="text-text-muted hover:text-foreground transition-colors py-2 text-sm font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Submit Project
                </a>
                <a 
                  href="#docs" 
                  className="text-text-muted hover:text-foreground transition-colors py-2 text-sm font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Documentation
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center relative">
            <h1 className="text-heading-1 text-foreground mb-6 animate-fade-in-up">
              The internet-native payment protocol
            </h1>
            <p className="text-body text-text-muted mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Fast, cheap, and AI-friendly payments for the x402 ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#ecosystem"
                className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Ecosystem
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#submit"
                className="border-2 border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary hover:border-foreground transition-all duration-300"
              >
                Submit Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-heading-2 text-foreground mb-5">Ecosystem Projects</h2>
            <p className="text-body text-text-muted max-w-2xl mx-auto">
              Discover the innovative projects building on x402
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <ProjectCard
              name="Payment Gateway"
              description="A comprehensive payment processing solution for merchants, enabling seamless x402 transactions with advanced fraud protection and real-time settlement."
              category="Payment Processing"
              teamSize="5-10"
              status="Live"
              website="https://example.com"
            />
            
            <ProjectCard
              name="Wallet Integration"
              description="Seamless wallet connectivity for x402 transactions, supporting multiple wallet types with intuitive user experience and security features."
              category="Wallet"
              teamSize="3-5"
              status="Beta"
              website="https://example.com"
            />
            
            <ProjectCard
              name="Analytics Dashboard"
              description="Real-time insights and reporting for x402 transactions, providing merchants with detailed analytics and performance metrics."
              category="Analytics"
              teamSize="2-4"
              status="Live"
              website="https://example.com"
            />

            <ProjectCard
              name="DeFi Protocol"
              description="Decentralized finance protocol built on x402, enabling automated market making and liquidity provision for payment networks."
              category="DeFi"
              teamSize="8-15"
              status="Development"
              website="https://example.com"
            />

            <ProjectCard
              name="NFT Marketplace"
              description="Non-fungible token marketplace with x402 payment integration, allowing creators to monetize digital assets with instant settlements."
              category="NFT"
              teamSize="6-12"
              status="Beta"
              website="https://example.com"
            />

            <ProjectCard
              name="Gaming Platform"
              description="Blockchain gaming platform utilizing x402 for in-game purchases, tournaments, and player rewards with micro-transaction support."
              category="Gaming"
              teamSize="10-20"
              status="Live"
              website="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Submit Project Section */}
      <section id="submit" className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 text-foreground mb-5">Submit Your Project</h2>
            <p className="text-body text-text-muted max-w-2xl mx-auto">
              Building something amazing on x402? Share it with the ecosystem and get discovered.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <ProjectSubmissionForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-semibold">x402</span>
              </div>
              <p className="text-gray-400 mb-6 text-body-small">
                Building the future of payments with the internet-native payment protocol.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Discord</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.942 4.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.272.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-8.662zM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Ecosystem</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#ecosystem" className="hover:text-white transition-colors text-body-small">Projects</a></li>
                <li><a href="#submit" className="hover:text-white transition-colors text-body-small">Submit Project</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Developer Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-body-small">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-body-small">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-body-small">&copy; 2024 X402 Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
