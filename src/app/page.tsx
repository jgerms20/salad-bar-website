import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import FeaturedMenu from '@/components/sections/FeaturedMenu';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedMenu />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
