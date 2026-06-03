import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import Industries from '../components/sections/Industries';
import Capabilities from '../components/sections/Capabilities';
import WhyUs from '../components/sections/WhyUs';
import GlobalPresence from '../components/sections/GlobalPresence';
import Quality from '../components/sections/Quality';
import Testimonials from '../components/sections/Testimonials';
import CTABanner from '../components/sections/CTABanner';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <Hero />
      <Stats />
      <About />
      <Products />
      <Industries />
      <Capabilities />
      <WhyUs />
      <GlobalPresence />
      <Quality />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
