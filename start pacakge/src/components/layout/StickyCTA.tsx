import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/site';

const HIDE_PATHS = ['/contact', '/thank-you'];

export default function StickyCTA() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDE_PATHS.includes(pathname)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border-light bg-white/95 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="container-site flex items-center gap-3 py-3">
        <a
          href={siteConfig.phoneHref}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-navy-950 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={siteConfig.whatsappHref}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-navy-950 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
        <Link to="/contact" className="btn-primary flex-1 px-4 py-3 text-center text-[11px]">
          Request Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
