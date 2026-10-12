import { business } from "../data/business";
import { CoffeeHeroVisual } from "./CoffeeHeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-cream" />
        <CoffeeHeroVisual />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
            {business.tagline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-espresso/75 leading-relaxed max-w-lg">
            {business.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 py-3 bg-espresso text-paper font-medium rounded hover:bg-espresso/90 transition-colors text-base"
            >
              Explore the Menu
            </a>
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-espresso text-espresso font-medium rounded hover:bg-espresso hover:text-paper transition-colors text-base"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
