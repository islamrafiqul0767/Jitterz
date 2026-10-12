import { images, imageDisclaimer } from "../data/business";
import { ImageWithFallback } from "../components/ImageWithFallback";

const galleryImages = [
  { src: images.hero, alt: "Warm latte in a ceramic cup on a wooden table", caption: "Morning Ritual", span: "tall" },
  { src: images.espresso, alt: "Coffee cups arranged on a café counter", caption: "The Daily Pour", span: "wide" },
  { src: images.coffeeBeans, alt: "Coffee beans and brewing equipment in warm light", caption: "From Bean to Cup", span: "square" },
  { src: images.interior, alt: "Coffee preparation with steam rising", caption: "Crafted by Hand", span: "tall" },
  { src: images.bakery, alt: "Freshly baked pastries and croissants on display", caption: "Baked Fresh", span: "wide" },
  { src: images.atmosphere, alt: "Café table setting with warm afternoon light", caption: "Afternoon Light", span: "square" },
  { src: images.cinnamonRolls, alt: "Cinnamon rolls with cream cheese icing", caption: "Sweet Indulgence", span: "wide" },
  { src: images.icedCoffee, alt: "Espresso cup with rich crema", caption: "Cool Refreshment", span: "tall" },
  { src: images.breakfast, alt: "Breakfast sandwich on a ceramic plate", caption: "Morning Fare", span: "square" },
];

export function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">Gallery</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              A visual taste of Jitterz.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              A curated collection of café moments — the warmth, the craft, the details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, index) => (
              <figure key={index} className="group relative overflow-hidden rounded-xl break-inside-avoid">
                <div className={`${
                  img.span === 'tall' ? 'aspect-[3/4]' :
                  img.span === 'wide' ? 'aspect-[4/3]' :
                  'aspect-square'
                } overflow-hidden`}>
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-cream text-sm font-medium">{img.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-espresso/40 italic max-w-lg mx-auto">{imageDisclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}
