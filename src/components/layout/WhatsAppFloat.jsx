import { MessageCircle } from 'lucide-react';
import { useClient } from '../../context/clientStore';

export default function WhatsAppFloat() {
  const client = useClient();
  const href = `https://wa.me/${client.contact.whatsapp}`;

  return (
    <div className="whatsapp-float">
      <div className="whatsapp-float__tooltip">Chat on WhatsApp</div>
      <a
        href={href}
        className="whatsapp-float__btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
