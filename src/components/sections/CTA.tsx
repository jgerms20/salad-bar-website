'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-[#0a0a0c]">
      <div className="container-content relative">
        <div
          className={`relative rounded-[2rem] overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF4F]/20 via-[#111114] to-purple-500/10" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          </div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 -left-20 w-60 h-60 bg-[#D4FF4F]/30 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-float delay-300" />

          {/* Neon Border Effect */}
          <div className="absolute inset-0 rounded-[2rem] border border-[#D4FF4F]/20 animate-pulse-glow" />

          {/* Content */}
          <div className="relative px-8 py-20 sm:px-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#D4FF4F]/10 border border-[#D4FF4F]/20 mb-8">
                <svg
                  className="w-10 h-10 text-[#D4FF4F]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>

              <h2
                className="display-medium text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Ready to Taste the{' '}
                <span className="text-[#D4FF4F]">Freshness?</span>
              </h2>

              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Join our community of health-conscious food lovers. Your perfect salad is just a click away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/order" className="btn-primary group">
                  <span>Order Now</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/locations" className="btn-secondary">
                  <span>Find a Location</span>
                </Link>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-white/30 text-sm">Coming soon on:</span>
                <div className="flex gap-3">
                  <div className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4FF4F]/30 transition-all cursor-pointer">
                    <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">App Store</span>
                  </div>
                  <div className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4FF4F]/30 transition-all cursor-pointer">
                    <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
