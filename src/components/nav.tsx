import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Nav() {
  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Points to Top of Home */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              DealSense
              <span className="text-emerald-500 font-black ml-0.5">.</span>
              <span className="text-slate-400 font-light text-xs ml-2 tracking-widest uppercase">By SERA</span>
            </Link>
          </div>

          {/* Desktop Product Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* The Main CTA - Linked to Home Contact Section */}
            <Link href="/#contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-full font-bold shadow-lg shadow-emerald-500/20">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" className="text-slate-600">Menu</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}