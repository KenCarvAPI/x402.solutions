import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X402 Ecosystem | Building the Future of Payments",
  description: "Discover innovative projects building on the x402 protocol. Join the ecosystem of developers creating the next generation of payment solutions.",
  keywords: "x402, payments, protocol, ecosystem, blockchain, fintech, payment processing, decentralized finance",
  authors: [{ name: "X402 Solutions" }],
  creator: "X402 Solutions",
  publisher: "X402 Solutions",
  robots: "index, follow",
  metadataBase: new URL(process.env.SITE_URL || 'https://x402.solutions'),
  openGraph: {
    title: "X402 Ecosystem | Building the Future of Payments",
    description: "Discover innovative projects building on the x402 protocol. Join the ecosystem of developers creating the next generation of payment solutions.",
    type: "website",
    locale: "en_US",
    siteName: "X402 Ecosystem",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "X402 Ecosystem - Building the Future of Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X402 Ecosystem | Building the Future of Payments",
    description: "Discover innovative projects building on the x402 protocol. Join the ecosystem of developers creating the next generation of payment solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
