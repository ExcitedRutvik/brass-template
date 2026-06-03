import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { ClientProvider } from './context/ClientContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import QualityPage from './pages/QualityPage';
import Export from './pages/Export';
import Contact from './pages/Contact';

import './styles/main.css';
import './styles/components.css';
import './styles/animations.css';

function ScrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

export default function App() {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/export" element={<Export />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </ClientProvider>
  );
}
