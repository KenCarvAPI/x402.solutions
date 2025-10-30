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
            <nav className="hidden md:flex space-x-16">
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
    </div>
  );
}
