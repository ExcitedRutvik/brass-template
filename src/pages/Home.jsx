import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Products from '../components/sections/Products';
import Industries from '../components/sections/Industries';
import LogoMarquee from '../components/sections/LogoMarquee';
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
    <>
      <Helmet>
        <title>Deepak Products | Sheet Metal & Brass Components Manufacturer in Jamnagar</title>
        <meta name="description" content="Jamnagar's trusted sheet metal & brass components manufacturer since 1985. ISO 9001:2015 certified. MCB parts, electrical components, crimping lugs, turned parts. Export to 10+ countries." />
        <link rel="canonical" href="https://deepakproducts.com/" />
        <meta property="og:url" content="https://deepakproducts.com/" />
      </Helmet>
      <main ref={ref}>
        <Hero />
        <Stats />
        <LogoMarquee />
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
    </>
  );
}
