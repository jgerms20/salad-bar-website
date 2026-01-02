'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/data/company';

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-[#D4FF4F]' : 'text-white/20'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '15+', label: 'Local Farm Partners' },
  { value: '100%', label: 'Fresh Ingredients' },
];

export default function Testimonials() {
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
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#030304] to-[#0a0a0c]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Accent Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4FF4F]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="container-content relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block label mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`display-medium text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            What Our Customers <span className="text-[#D4FF4F]">Say</span>
          </h2>
          <p
            className={`body-large transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join thousands of happy customers who&apos;ve made Fresh Greens their go-to for healthy eating.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group glass-card p-6 transition-all duration-700 hover:border-[#D4FF4F]/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#222228] ring-2 ring-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-[#D4FF4F]/70">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                <span className="text-gradient">{stat.value}</span>
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Logos Section */}
        <div
          className={`mt-20 pt-16 border-t border-white/5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-center text-sm text-white/30 uppercase tracking-widest mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {/* Placeholder logos - these would be real publication logos */}
            <div className="text-2xl font-bold text-white tracking-tight">Eater</div>
            <div className="text-2xl font-bold text-white tracking-tight">Bon Appétit</div>
            <div className="text-2xl font-bold text-white tracking-tight">Food & Wine</div>
            <div className="text-2xl font-bold text-white tracking-tight">NYT Cooking</div>
            <div className="text-2xl font-bold text-white tracking-tight">Thrillist</div>
          </div>
        </div>
      </div>
    </section>
  );
}
