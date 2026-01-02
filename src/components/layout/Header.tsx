'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Menu', href: '/menu' },
  { name: 'Build Your Own', href: '/build' },
  { name: 'Locations', href: '/locations' },
  { name: 'About', href: '/about' },
  { name: 'Catering', href: '/catering' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030304]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              {/* Animated leaf icon */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4FF4F]/20 rounded-xl blur-lg group-hover:bg-[#D4FF4F]/30 transition-all duration-300" />
                <svg
                  className="relative w-7 h-7 text-[#D4FF4F] transform group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl font-semibold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Fresh Greens
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                  Est. 2020
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4FF4F] group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center gap-4">
            <Link
              href="/order"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4FF4F] text-[#030304] text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,255,79,0.4)]"
            >
              <span className="relative z-10">Order Now</span>
              <svg
                className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e5ff8f] to-[#D4FF4F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col gap-1.5 items-center justify-center w-6">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 w-0' : 'w-4 opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-1 border-t border-white/5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-white/70 hover:text-[#D4FF4F] hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/order"
                className="flex justify-center items-center gap-2 w-full py-3 bg-[#D4FF4F] text-[#030304] font-semibold rounded-full hover:bg-[#e5ff8f] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
