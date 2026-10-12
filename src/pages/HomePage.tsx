import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Coffee, Leaf, Croissant, GlassWater, Star } from "lucide-react";
import { business, highlights, images, reviewData, reviewExcerpts } from "../data/business";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { AnimatedSection, AnimatedText, staggerContainer, fadeInUp } from "../utils/animations";

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
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.hero}
            alt="A beautifully prepared latte on a wooden café table with warm morning light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/60 to-espresso/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <motion.div 
            className="max-w-2xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="text-copper text-sm uppercase tracking-[0.2em] font-medium mb-4"
            >
              Downtown Dubuque, Iowa
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl text-cream leading-[1.1]"
            >
              <AnimatedText>{business.tagline}</AnimatedText>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-cream/80 leading-relaxed max-w-lg"
            >
              {business.description}
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-caramel text-cream font-medium rounded-full hover:bg-copper transition-all hover:shadow-lg hover:shadow-caramel/20 text-base"
                >
                  Explore the Menu
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={business.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-cream/40 text-cream font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all text-base"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">Welcome</p>
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
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-caramel font-medium hover:text-terracotta transition-colors group"
              >
                Learn more about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-espresso/20">
                  <ImageWithFallback
                    src={images.interior}
                    alt="Warm café interior with wooden furniture, plants, and natural light"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-copper/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-olive/15 rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso">
              Crafted with care, served with warmth.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group bg-cream rounded-2xl p-7 hover:shadow-xl hover:shadow-espresso/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-caramel/15 to-terracotta/15 text-caramel mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-serif text-xl text-espresso mb-2">{item.title}</h3>
                <p className="text-espresso/60 text-sm leading-relaxed">{item.description}</p>
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
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:row-span-2">
              <div className="h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src={images.espresso}
                  alt="Professional espresso preparation with warm highlights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="h-full min-h-[240px] rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src={images.bakery}
                  alt="Freshly baked croissants, muffins, and pastries on a bakery counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="h-full min-h-[240px] rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src={images.icedCoffee}
                  alt="Refreshing iced coffee in natural morning light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-espresso/15 text-espresso font-medium rounded-full hover:bg-espresso hover:text-cream transition-all"
            >
              View Gallery
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 sm:py-28 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-copper text-sm uppercase tracking-[0.2em] font-medium mb-3">What Customers Say</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
              Loved by the community.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-copper fill-copper" />
                <span>{reviewData.restaurantji.rating}/5 on Restaurantji</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-copper fill-copper" />
                <span>{reviewData.yelp.rating}/5 on Yelp</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewExcerpts.map((excerpt, index) => (
              <div key={index} className="bg-roasted/50 rounded-2xl p-6 border border-cream/5">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-copper fill-copper" />
                  ))}
                </div>
                <p className="text-cream/80 text-sm leading-relaxed italic mb-4">
                  "{excerpt.text}"
                </p>
                <p className="text-cream/40 text-xs">
                  — {excerpt.source}, {excerpt.date}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 bg-caramel text-cream font-medium rounded-full hover:bg-copper transition-colors"
            >
              Read More Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.storefront}
            alt="Charming neighborhood café storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/80" />
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
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-caramel text-cream font-medium rounded-full hover:bg-copper transition-all"
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
