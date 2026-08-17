import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyCTA from './components/layout/StickyCTA';
import CookieConsent from './components/layout/CookieConsent';
import Breadcrumbs from './components/Breadcrumbs';
import ScrollToTop from './lib/ScrollToTop';
import { trackPageView, trackEvent } from './lib/analytics';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function useContactLinkTracking() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.('a[href]');
      if (!target) return;
      const href = (target as HTMLAnchorElement).getAttribute('href') ?? '';

      if (href.startsWith('tel:')) {
        trackEvent('phone_click');
      } else if (href.startsWith('mailto:')) {
        trackEvent('email_click');
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click');
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useContactLinkTracking();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyCTA />
      <CookieConsent />
    </>
  );
}

export default App;