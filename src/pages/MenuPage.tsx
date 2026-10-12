import { useState } from "react";
import { menuCategories, menuNote, images } from "../data/business";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);

  const activeCat = menuCategories.find((c) => c.id === activeCategory) || menuCategories[0];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
              Our Menu
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              Crafted with care.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              From freshly brewed coffee to bakery favorites — here's what you'll find at Jitterz.
            </p>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-butter/20 rounded-full blur-3xl -z-0" aria-hidden="true" />
      </section>

      {/* Menu Content */}
      <section className="py-12 sm:py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Category Navigation - Sidebar */}
            <aside className="lg:col-span-1">
              <nav aria-label="Menu categories" className="lg:sticky lg:top-28">
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                  {menuCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? 'bg-espresso text-paper shadow-md'
                          : 'bg-cream text-espresso/70 hover:bg-espresso/5 hover:text-espresso'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Category image for desktop */}
                <div className="hidden lg:block mt-8">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={activeCategory === 'coffee-espresso' ? images.latteArt :
                            activeCategory === 'tea-chai' ? images.icedCoffee :
                            activeCategory === 'cold-blended' ? images.icedCoffee :
                            activeCategory === 'breakfast' ? images.breakfast :
                            activeCategory === 'bakery' ? images.bakery :
                            images.coffeeBeans}
                      alt={`${activeCat.name} selection`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </nav>
            </aside>

            {/* Menu Items */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-espresso">
                  {activeCat.name}
                </h2>
                <p className="mt-2 text-espresso/60">{activeCat.description}</p>
              </div>

              <div className="space-y-1">
                {activeCat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center justify-between py-4 px-4 rounded-xl hover:bg-cream/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-caramel/60 group-hover:bg-caramel transition-colors" />
                      <span className="text-base sm:text-lg text-espresso font-medium">
                        {item.name}
                      </span>
                    </div>
                    {item.note && (
                      <span className="text-sm text-espresso/40 italic">
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Category navigation at bottom */}
              <div className="mt-12 pt-8 border-t border-espresso/5 flex items-center justify-between">
                {menuCategories.findIndex(c => c.id === activeCategory) > 0 && (
                  <button
                    onClick={() => {
                      const idx = menuCategories.findIndex(c => c.id === activeCategory);
                      setActiveCategory(menuCategories[idx - 1].id);
                    }}
                    className="text-sm text-espresso/60 hover:text-caramel transition-colors"
                  >
                    ← Previous
                  </button>
                )}
                <div />
                {menuCategories.findIndex(c => c.id === activeCategory) < menuCategories.length - 1 && (
                  <button
                    onClick={() => {
                      const idx = menuCategories.findIndex(c => c.id === activeCategory);
                      setActiveCategory(menuCategories[idx + 1].id);
                    }}
                    className="text-sm text-espresso/60 hover:text-caramel transition-colors"
                  >
                    Next →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 p-5 bg-cream/50 border border-espresso/5 rounded-xl text-center">
            <p className="text-sm text-espresso/55 italic">
              {menuNote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
