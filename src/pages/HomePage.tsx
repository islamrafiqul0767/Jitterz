import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Coffee, Leaf, Croissant, GlassWater } from "lucide-react";
import { business, highlights, images, menuCategories } from "../data/business";

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee size={28} strokeWidth={1.5} />,
  leaf: <Leaf size={28} strokeWidth={1.5} />,
  croissant: <Croissant size={28} strokeWidth={1.5} />,
  glass: <GlassWater size={28} strokeWidth={1.5} />,
};

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="A beautifully prepared latte on a wooden café table with warm morning light"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up text-caramel text-sm uppercase tracking-widest font-medium mb-4">
              Downtown Dubuque, Iowa
            </p>
            <h1 className="animate-fade-in-up animation-delay-200 font-serif text-4xl sm:text-5xl lg:text-7xl text-cream leading-[1.1]">
              {business.tagline}
            </h1>
            <p className="animate-fade-in-up animation-delay-400 mt-6 text-lg sm:text-xl text-cream/80 leading-relaxed max-w-lg">
              {business.description}
            </p>
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-caramel text-paper font-medium rounded-full hover:bg-terracotta transition-all hover:shadow-lg hover:shadow-caramel/20 text-base"
              >
                Explore the Menu
                <ArrowRight size={18} />
              </Link>
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-cream/40 text-cream font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all text-base"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-cream/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
                Welcome
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso leading-tight">
                Your neighborhood café on Main Street.
              </h2>
              <div className="mt-6 space-y-4 text-espresso/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Jitterz Coffee & Cafe is a welcoming spot in the heart of downtown Dubuque. 
                  Whether you're starting your morning with a freshly brewed cup, grabbing a 
                  flaky croissant on your way to work, or settling in with a good book and a 
                  warm chai latte — we're glad you're here.
                </p>
                <p>
                  From espresso drinks to bakery favorites, breakfast sandwiches to smoothies, 
                  there's something for everyone at Jitterz.
                </p>
              </div>
              <Link
                to="/our-cafe"
                className="inline-flex items-center gap-2 mt-8 text-caramel font-medium hover:text-terracotta transition-colors group"
              >
                Learn more about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-espresso/10">
                <img
                  src={images.interior}
                  alt="Warm café interior with wooden furniture, plants, and natural light"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-butter/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sage/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso">
              Crafted with care, served with warmth.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group bg-paper rounded-2xl p-7 hover:shadow-xl hover:shadow-espresso/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-caramel/10 to-terracotta/10 text-caramel mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-serif text-xl text-espresso mb-2">
                  {item.title}
                </h3>
                <p className="text-espresso/60 text-sm leading-relaxed">
                  {item.description}
                </p>
                {index === 0 && (
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-caramel font-medium hover:text-terracotta transition-colors"
                  >
                    See the menu <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Feature Section */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:row-span-2">
              <div className="h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden group">
                <img
                  src={images.espresso}
                  alt="Professional espresso preparation with warm highlights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="h-full min-h-[240px] rounded-2xl overflow-hidden group">
                <img
                  src={images.bakery}
                  alt="Freshly baked croissants, muffins, and pastries on a bakery counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="h-full min-h-[240px] rounded-2xl overflow-hidden group">
                <img
                  src={images.icedCoffee}
                  alt="Refreshing iced coffee in natural morning light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-espresso/15 text-espresso font-medium rounded-full hover:bg-espresso hover:text-paper transition-all"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={images.cinnamonRolls}
                  alt="Freshly baked cinnamon rolls with cream cheese icing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-caramel text-paper px-5 py-3 rounded-xl shadow-lg">
                <p className="font-serif text-lg">Fresh Daily</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
                Our Menu
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso leading-tight">
                Something for every mood.
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuCategories.slice(0, 4).map((cat) => (
                  <div key={cat.id} className="flex items-center gap-3 p-3 bg-paper rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-caramel flex-shrink-0" />
                    <span className="text-sm font-medium text-espresso">{cat.name}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 mt-8 text-caramel font-medium hover:text-terracotta transition-colors group"
              >
                See the full menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.storefront}
            alt="Charming neighborhood café storefront"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-espresso/75" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Stop by and say hello.
          </h2>
          <p className="mt-5 text-lg text-cream/70 max-w-xl mx-auto">
            We're located at 1073 Main Street in downtown Dubuque. Come in for a coffee, 
            a pastry, or just a warm welcome.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-caramel text-paper font-medium rounded-full hover:bg-terracotta transition-all"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-cream/40 text-cream font-medium rounded-full hover:bg-cream/10 transition-all"
            >
              Visit Info &amp; Hours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
