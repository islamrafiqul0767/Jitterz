import { images, imageDisclaimer } from "../data/business";

const galleryImages = [
  { src: images.gallery1, alt: "Warm latte in a ceramic cup on a wooden table", caption: "Morning Ritual", span: "tall" },
  { src: images.gallery2, alt: "Coffee cups arranged on a café counter", caption: "The Daily Pour", span: "wide" },
  { src: images.gallery3, alt: "Coffee beans and brewing equipment in warm light", caption: "From Bean to Cup", span: "square" },
  { src: images.gallery4, alt: "Coffee preparation with steam rising", caption: "Crafted by Hand", span: "tall" },
  { src: images.bakery, alt: "Freshly baked pastries and croissants on display", caption: "Baked Fresh", span: "wide" },
  { src: images.gallery5, alt: "Café table setting with warm afternoon light", caption: "Afternoon Light", span: "square" },
  { src: images.cinnamonRolls, alt: "Cinnamon rolls with cream cheese icing", caption: "Sweet Indulgence", span: "wide" },
  { src: images.gallery6, alt: "Espresso cup with rich crema", caption: "Perfect Extraction", span: "tall" },
  { src: images.breakfast, alt: "Breakfast sandwich on a ceramic plate", caption: "Morning Fare", span: "square" },
  { src: images.icedCoffee, alt: "Iced coffee with condensation on a warm day", caption: "Cool Refreshment", span: "wide" },
  { src: images.interior, alt: "Café interior with warm lighting and comfortable seating", caption: "Our Space", span: "tall" },
  { src: images.coffeeBeans, alt: "Coffee beans with rich texture and warm tones", caption: "The Foundation", span: "square" },
];

export function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
              Gallery
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              A visual taste of Jitterz.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              A curated collection of café moments — the warmth, the craft, the details.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <figure
                key={index}
                className="group relative overflow-hidden rounded-xl break-inside-avoid"
              >
                <div className={`${
                  img.span === 'tall' ? 'aspect-[3/4]' :
                  img.span === 'wide' ? 'aspect-[4/3]' :
                  'aspect-square'
                } overflow-hidden`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Caption overlay */}
                <figcaption className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-cream text-sm font-medium">
                    {img.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-xs text-espresso/40 italic max-w-lg mx-auto">
              {imageDisclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
