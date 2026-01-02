'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { signatureSalads } from '@/data/menu';

export default function FeaturedMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const featuredItems = signatureSalads.filter((item) => item.featured);

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
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#D4FF4F]/5 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] translate-x-1/4" />

      <div className="container-content relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span
              className={`inline-block label mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Our Menu
            </span>
            <h2
              className={`display-medium text-white mb-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Chef&apos;s <span className="text-[#D4FF4F]">Favorites</span>
            </h2>
            <p
              className={`body-large transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Discover our most loved signature salads, crafted with care using the freshest seasonal ingredients.
            </p>
          </div>

          <Link
            href="/menu"
            className={`group inline-flex items-center gap-2 text-[#D4FF4F] font-medium hover:text-white transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>View Full Menu</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative glass-card overflow-hidden transition-all duration-700 hover:border-[#D4FF4F]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4FF4F] text-[#030304] text-xs font-bold uppercase tracking-wider rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Featured
                </span>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF4F]/20 to-purple-500/20 z-10" />
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="heading-2 text-white group-hover:text-[#D4FF4F] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-[#D4FF4F]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="body-regular mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/40">{item.calories} cal</span>
                      <div className="flex gap-2">
                        {item.dietary.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#D4FF4F] hover:text-white transition-colors">
                      <span>Order</span>
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Salads Preview */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {signatureSalads.slice(0, 5).map((item, index) => (
            <Link
              key={item.id}
              href={`/menu#${item.id}`}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[#D4FF4F]/0 group-hover:bg-[#D4FF4F]/10 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium text-white truncate">{item.name}</p>
                <p className="text-xs text-white/60">${item.price.toFixed(2)}</p>
              </div>
              {index === 4 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <span className="text-white font-medium">+{signatureSalads.length - 5} more</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
