import { MapPin } from "lucide-react";
import { business } from "../data/business";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            Our Café
          </h2>
          <div className="mt-8 space-y-5 text-espresso/75 text-base sm:text-lg leading-relaxed">
            <p>
              Jitterz Coffee & Cafe is a neighborhood café located on Main Street
              in downtown Dubuque, Iowa. We're a place to enjoy a freshly brewed
              cup of coffee, an espresso drink, or one of our café favorites.
            </p>
            <p>
              Whether you're stopping in for a morning coffee and a breakfast
              bagel sandwich, picking up a scone or croissant, or grabbing a
              panini for lunch, we're happy to have you.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-2 text-caramel font-medium">
            <MapPin size={18} />
            <span>1073 Main St, Dubuque, IA 52001</span>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="w-12 h-px bg-espresso/15" />
          <span className="w-2 h-2 rounded-full bg-caramel/40" />
          <span className="w-12 h-px bg-espresso/15" />
        </div>
      </div>
    </section>
  );
}
