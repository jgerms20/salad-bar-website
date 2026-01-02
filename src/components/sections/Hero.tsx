'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-radial-hero" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4FF4F]/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-float delay-200" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 text-sm text-white/80 mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF4F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF4F]"></span>
            </span>
            <span>Now offering same-day delivery</span>
          </div>

          {/* Heading */}
          <h1
            className={`mb-8 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span
              className="display-large block text-white mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Farm Fresh.
            </span>
            <span
              className="display-large block text-[#D4FF4F] mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Made Daily.
            </span>
            <span
              className="display-large block text-white/90"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Deliciously{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Healthy.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D4FF4F]/30"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 Q 50 0, 100 8 T 200 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Craft your perfect salad from our selection of premium ingredients, 
            locally sourced and prepared fresh every morning. 
            <span className="text-white/80"> Experience the difference.</span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/menu" className="btn-primary group">
              <span>Explore Menu</span>
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
            <Link href="/build" className="btn-secondary">
              <span>Build Your Own</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 text-sm transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4FF4F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Locally Sourced</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4FF4F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Made Fresh Daily</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4FF4F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              </div>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-[#D4FF4F]/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030304] to-transparent" />
    </section>
  );
}
