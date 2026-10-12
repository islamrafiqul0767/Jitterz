import { business } from "../data/business";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Café", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-xl font-bold text-cream">
              Jitterz
              <span className="font-normal text-cream/60 ml-1 text-base">&amp; Coffee</span>
            </p>
            <p className="mt-3 text-sm text-cream/60 leading-relaxed">
              {business.address}
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-2 inline-block text-sm text-cream/60 hover:text-caramel transition-colors"
            >
              {business.phone}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-cream text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-caramel transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-cream text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/60 hover:text-caramel transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={business.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/60 hover:text-caramel transition-colors"
                >
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="text-sm text-cream/60 hover:text-caramel transition-colors"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-medium text-cream text-sm uppercase tracking-wider mb-4">
              Info
            </h4>
            <p className="text-sm text-cream/60 leading-relaxed">
              Coffee, espresso drinks, and café favorites in downtown Dubuque, Iowa.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              &copy; {currentYear} {business.name}. All rights reserved.
            </p>
            <p className="text-xs text-cream/40 text-center sm:text-right">
              Independent website concept — not the official Jitterz Coffee &amp; Cafe website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
