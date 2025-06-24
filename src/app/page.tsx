'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
