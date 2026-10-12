import { menuCategories, menuNote } from "../data/business";

export function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            Our Menu
          </h2>
          <p className="mt-3 text-espresso/65 text-lg max-w-xl mx-auto">
            A selection of coffee, tea, bakery items, and café favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="bg-cream/50 border border-espresso/5 rounded-lg p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-espresso mb-4 pb-3 border-b border-espresso/10">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-espresso/75 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-espresso/55 italic">
          {menuNote}
        </p>
      </div>
    </section>
  );
}
