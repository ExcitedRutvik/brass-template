import { useReveal } from '../hooks/useReveal';
import ContactSection from '../components/sections/ContactSection';

export default function Contact() {
  const ref = useReveal();
  return (
    <main ref={ref} style={{ paddingTop: '5rem' }}>
      <ContactSection />
    </main>
  );
}
