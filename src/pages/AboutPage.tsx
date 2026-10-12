import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { business, images } from "../data/business";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function AboutPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">Our Café</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              A neighborhood gathering place.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              Jitterz Coffee & Cafe is a welcoming spot on Main Street in downtown Dubuque — 
              a place for good coffee, fresh bakery items, and friendly conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-espresso leading-snug">
                  Coffee, community, and a little Main Street charm.
                </h2>
                <div className="mt-5 space-y-4 text-espresso/70 leading-relaxed">
                  <p>
                    Located at 1073 Main Street, Jitterz Coffee & Cafe has been serving downtown Dubuque 
                    since May 2007. Owner Tanya Evans bakes all pastries from scratch daily, creating 
                    homemade treats that keep customers coming back.
                  </p>
                  <p>
                    Whether you're popping in for a quick morning coffee, settling in with a 
                    breakfast bagel sandwich, or picking up a cinnamon roll for the road — 
                    we're happy to have you.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-ivory rounded-xl border border-espresso/5">
                <h3 className="font-serif text-lg text-espresso mb-3">What You'll Find</h3>
                <ul className="space-y-2.5 text-sm text-espresso/70">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Freshly brewed coffee and espresso drinks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Homemade pastries baked daily by the owner
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Famous spinach feta croissant
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Gluten-free muffin options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Belgian-style waffles made from scratch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                    Cozy atmosphere with vintage bicycle and gumball machine
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

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={images.interior}
                    alt="Cozy café interior with warm lighting and comfortable seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <ImageWithFallback
                    src={images.hero}
                    alt="Beautifully crafted latte with detailed foam art"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={images.atmosphere}
                  alt="Welcoming café atmosphere with warm lighting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-espresso/40 text-center italic">
            Photos shown are illustrative concept imagery and may not depict the actual Jitterz Coffee &amp; Cafe location or products.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso">Come see us on Main Street.</h2>
          <p className="mt-4 text-espresso/65">{business.address}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream font-medium rounded-full hover:bg-caramel transition-colors"
            >
              <MapPin size={16} />
              Get Directions
            </a>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-espresso/15 text-espresso font-medium rounded-full hover:bg-espresso hover:text-cream transition-all"
            >
              Hours &amp; Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
