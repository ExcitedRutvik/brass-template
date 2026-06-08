import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import ContactSection from '../components/sections/ContactSection';

export default function Contact() {
  const ref = useReveal();
  return (
    <>
      <Helmet>
        <title>Contact Us | Deepak Products — Jamnagar, Gujarat</title>
        <meta name="description" content="Contact Deepak Products for brass component quotes, custom orders, and export inquiries. Based in Jamnagar, Gujarat, India. WhatsApp response within the hour." />
        <link rel="canonical" href="https://deepakproducts.com/contact" />
        <meta property="og:url" content="https://deepakproducts.com/contact" />
      </Helmet>
      <main ref={ref} style={{ paddingTop: '5rem' }}>
        <ContactSection />
      </main>
    </>
  );
}
