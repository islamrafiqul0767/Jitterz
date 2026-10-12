import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { business } from "../data/business";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Café", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [noticeDismissed, setNoticeDismissed] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key
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

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-200 ${noticeDismissed ? 'top-0' : 'top-0'}`}>
      {/* Demo Notice Banner */}
      {!noticeDismissed && (
        <div className="bg-caramel/90 text-paper text-center py-1.5 px-10 text-xs sm:text-sm relative">
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

      {/* Main Navigation Bar */}
      <div className="bg-paper/95 backdrop-blur-sm border-b border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Wordmark */}
            <a
              href="#home"
              className="font-serif text-xl sm:text-2xl font-bold text-espresso tracking-tight hover:text-caramel transition-colors"
              aria-label="Jitterz Coffee & Cafe — Home"
            >
              Jitterz
              <span className="hidden sm:inline font-normal text-sage ml-1 text-base">&amp; Coffee</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-espresso/80 hover:text-caramel transition-colors focus-visible:outline-caramel"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-espresso text-paper text-sm font-medium rounded hover:bg-espresso/90 transition-colors"
              >
                Get Directions
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-espresso hover:text-caramel transition-colors"
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
          className="md:hidden bg-paper border-t border-espresso/10"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-espresso hover:text-caramel hover:bg-cream rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-espresso text-paper font-medium rounded hover:bg-espresso/90 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
