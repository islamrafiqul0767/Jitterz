import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Facebook } from "lucide-react";
import { business } from "../data/business";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Our Café", to: "/our-cafe" },
  { label: "Gallery", to: "/gallery" },
  { label: "Visit", to: "/visit" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-espresso">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [noticeDismissed, setNoticeDismissed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="fixed left-0 right-0 z-50">
      {/* Demo Notice */}
      {!noticeDismissed && (
        <div className="bg-terracotta/90 text-paper text-center py-1.5 px-10 text-xs sm:text-sm relative">
          <p className="inline">
            Independent website concept — not the official Jitterz Coffee &amp; Cafe website.
          </p>
          <button
            onClick={() => setNoticeDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-5 h-5 rounded-full hover:bg-paper/20 transition-colors"
            aria-label="Dismiss notice"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-paper/98 shadow-md backdrop-blur-md' : 'bg-paper/90 backdrop-blur-sm'} border-b border-espresso/5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Wordmark */}
            <Link
              to="/"
              className="group flex items-center gap-2"
              aria-label="Jitterz Coffee & Cafe — Home"
            >
              <span className="font-serif text-2xl sm:text-3xl text-espresso tracking-tight group-hover:text-caramel transition-colors">
                Jitterz
              </span>
              <span className="hidden sm:block w-px h-6 bg-espresso/20" />
              <span className="hidden sm:block text-xs uppercase tracking-widest text-sage font-medium">
                Coffee &amp; Cafe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    location.pathname === link.to
                      ? 'text-caramel'
                      : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-caramel rounded-full" />
                  )}
                </Link>
              ))}
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-espresso text-paper text-sm font-medium rounded-full hover:bg-caramel transition-colors"
              >
                <MapPin size={14} />
                Directions
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 text-espresso hover:text-caramel transition-colors rounded-lg hover:bg-cream"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="lg:hidden bg-paper border-t border-espresso/5 shadow-xl"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-caramel bg-cream'
                    : 'text-espresso hover:text-caramel hover:bg-cream/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-espresso text-paper font-medium rounded-lg hover:bg-caramel transition-colors"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-espresso/20 text-espresso font-medium rounded-lg hover:bg-cream transition-colors"
              >
                <Phone size={16} />
                {business.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream/80">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-caramel via-terracotta to-sage" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl text-cream">Jitterz</p>
            <p className="text-xs uppercase tracking-widest text-cream/40 mt-1">Coffee &amp; Cafe</p>
            <p className="mt-4 text-sm text-cream/50 leading-relaxed">
              {business.address}
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-2 inline-block text-sm text-cream/50 hover:text-caramel transition-colors"
            >
              {business.phone}
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-medium text-cream/90 text-xs uppercase tracking-widest mb-4">
              Navigate
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/50 hover:text-caramel transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-cream/90 text-xs uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-caramel transition-colors"
                >
                  <Facebook size={14} />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={business.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-caramel transition-colors"
                >
                  <MapPin size={14} />
                  Directions
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-caramel transition-colors"
                >
                  <Phone size={14} />
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium text-cream/90 text-xs uppercase tracking-widest mb-4">
              About
            </h4>
            <p className="text-sm text-cream/50 leading-relaxed">
              A neighborhood café on Main Street in downtown Dubuque, Iowa. Coffee, espresso, bakery, and café favorites.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/30">
              &copy; {currentYear} {business.name}. All rights reserved.
            </p>
            <p className="text-xs text-cream/30 text-center sm:text-right max-w-md">
              Independent website concept — not the official Jitterz Coffee &amp; Cafe website. For presentation to the business owner.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
