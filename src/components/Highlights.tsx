import { Coffee, Leaf, Croissant, GlassWater } from "lucide-react";
import { highlights } from "../data/business";

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee size={32} strokeWidth={1.5} />,
  leaf: <Leaf size={32} strokeWidth={1.5} />,
  croissant: <Croissant size={32} strokeWidth={1.5} />,
  glass: <GlassWater size={32} strokeWidth={1.5} />,
};

export function Highlights() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            What We Offer
          </h2>
          <p className="mt-3 text-espresso/65 text-lg">
            A neighborhood café with something for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-paper rounded-lg p-6 sm:p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream text-caramel mb-5">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">
                {item.title}
              </h3>
              <p className="text-espresso/65 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
