import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { business, images } from "../data/business";

export function OurCafePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
              Our Café
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              A neighborhood gathering place.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              Jitterz Coffee & Cafe is a welcoming spot on Main Street in downtown Dubuque — 
              a place for good coffee, fresh bakery items, and friendly conversation.
            </p>
          </div>
        </div>
        <div className="absolute top-32 right-10 w-48 h-48 bg-sage/10 rounded-full blur-3xl" aria-hidden="true" />
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Text */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-espresso leading-snug">
                  Coffee, community, and a little Main Street charm.
                </h2>
                <div className="mt-5 space-y-4 text-espresso/70 leading-relaxed">
                  <p>
                    Located at 1073 Main Street, Jitterz Coffee & Cafe is a neighborhood café 
                    serving downtown Dubuque. We offer freshly brewed coffee, espresso drinks, 
                    tea, chai, and a selection of bakery items and café favorites.
                  </p>
                  <p>
                    Whether you're popping in for a quick morning coffee, settling in with a 
                    breakfast bagel sandwich, or picking up a cinnamon roll for the road — 
                    we're happy to have you.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-cream rounded-xl border border-espresso/5">
                <h3 className="font-serif text-lg text-espresso mb-3">What You'll Find</h3>
                <ul className="space-y-2.5 text-sm text-espresso/70">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Freshly brewed coffee and espresso drinks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Tea, chai lattes, and hot chocolate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Breakfast bagel sandwiches
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Scones, muffins, croissants, cinnamon rolls, cookies, and Danish pastries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Paninis, soup, frappes, and smoothies
                  </li>
                </ul>
              </div>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-caramel font-medium hover:text-terracotta transition-colors group"
              >
                Explore the full menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Column - Images */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={images.interiorAlt}
                    alt="Cozy café interior with warm lighting and comfortable seating"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <img
                    src={images.latteArt}
                    alt="Beautifully crafted latte with detailed foam art"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={images.interior}
                  alt="Welcoming café atmosphere with wooden furniture and natural light"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Disclaimer */}
      <section className="py-8 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-espresso/40 text-center italic">
            Photos shown are illustrative concept imagery and may not depict the actual Jitterz Coffee &amp; Cafe location or products.
          </p>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso">
            Come see us on Main Street.
          </h2>
          <p className="mt-4 text-espresso/65">
            {business.address}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-paper font-medium rounded-full hover:bg-caramel transition-colors"
            >
              <MapPin size={16} />
              Get Directions
            </a>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-espresso/15 text-espresso font-medium rounded-full hover:bg-espresso hover:text-paper transition-all"
            >
              Hours &amp; Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
