import { Star, ExternalLink, Coffee, Croissant, Heart, Home, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { reviewData, reviewThemes, reviewExcerpts, images } from "../data/business";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { AnimatedSection } from "../utils/animations";

const themeIconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee size={24} strokeWidth={1.5} />,
  croissant: <Croissant size={24} strokeWidth={1.5} />,
  heart: <Heart size={24} strokeWidth={1.5} />,
  home: <Home size={24} strokeWidth={1.5} />,
  book: <BookOpen size={24} strokeWidth={1.5} />,
  users: <Users size={24} strokeWidth={1.5} />,
};

export function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">Reviews</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              Loved by the community.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              See what our customers are saying about Jitterz Coffee & Cafe.
            </p>
          </div>
        </div>
      </section>

      {/* Ratings Overview */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Restaurantji */}
            <AnimatedSection>
            <div className="bg-ivory rounded-2xl p-6 border border-espresso/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-espresso text-sm">Restaurantji</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-copper fill-copper" />
                  ))}
                </div>
              </div>
              <p className="font-serif text-4xl text-espresso">{reviewData.restaurantji.rating}</p>
              <p className="text-sm text-espresso/50 mt-1">{reviewData.restaurantji.count} reviews</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-espresso/60">
                  <span>Food</span>
                  <span>{reviewData.restaurantji.subRatings.food}/5</span>
                </div>
                <div className="flex items-center justify-between text-xs text-espresso/60">
                  <span>Atmosphere</span>
                  <span>{reviewData.restaurantji.subRatings.atmosphere}/5</span>
                </div>
                <div className="flex items-center justify-between text-xs text-espresso/60">
                  <span>Service</span>
                  <span>{reviewData.restaurantji.subRatings.service}/5</span>
                </div>
              </div>
              <a
                href={reviewData.restaurantji.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-caramel hover:text-terracotta transition-colors"
              >
                Read all reviews <ExternalLink size={12} />
              </a>
            </div>
            </AnimatedSection>

            {/* Yelp */}
            <AnimatedSection delay={0.1}>
            <div className="bg-ivory rounded-2xl p-6 border border-espresso/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-espresso text-sm">Yelp</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.round(reviewData.yelp.rating) ? "text-copper fill-copper" : "text-espresso/15"} />
                  ))}
                </div>
              </div>
              <p className="font-serif text-4xl text-espresso">{reviewData.yelp.rating}</p>
              <p className="text-sm text-espresso/50 mt-1">{reviewData.yelp.count} reviews</p>
              <a
                href={reviewData.yelp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-caramel hover:text-terracotta transition-colors"
              >
                Read on Yelp <ExternalLink size={12} />
              </a>
            </div>
            </AnimatedSection>

            {/* Tripadvisor */}
            <AnimatedSection delay={0.2}>
            <div className="bg-ivory rounded-2xl p-6 border border-espresso/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-espresso text-sm">Tripadvisor</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.round(reviewData.tripadvisor.rating) ? "text-copper fill-copper" : "text-espresso/15"} />
                  ))}
                </div>
              </div>
              <p className="font-serif text-4xl text-espresso">{reviewData.tripadvisor.rating}</p>
              <p className="text-sm text-espresso/50 mt-1">Traveler reviews</p>
              <a
                href={reviewData.tripadvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-caramel hover:text-terracotta transition-colors"
              >
                Read on Tripadvisor <ExternalLink size={12} />
              </a>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Review Themes */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso">What customers love</h2>
            <p className="mt-3 text-espresso/60">Recurring themes from verified reviews</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewThemes.map((theme) => (
              <div key={theme.theme} className="bg-cream rounded-2xl p-6 border border-espresso/5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-caramel/10 text-caramel mb-4">
                  {themeIconMap[theme.icon]}
                </div>
                <h3 className="font-serif text-lg text-espresso mb-2">{theme.theme}</h3>
                <p className="text-sm text-espresso/60 leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Excerpts */}
      <section className="py-16 sm:py-20 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-center mb-12">Customer voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewExcerpts.map((excerpt, index) => (
              <div key={index} className="bg-roasted/50 rounded-2xl p-6 border border-cream/5">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-copper fill-copper" />
                  ))}
                </div>
                <p className="text-cream/80 text-sm leading-relaxed italic mb-4">"{excerpt.text}"</p>
                <p className="text-cream/40 text-xs">— {excerpt.source}, {excerpt.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={images.atmosphere}
                alt="Warm café atmosphere"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso">See for yourself.</h2>
              <p className="mt-4 text-espresso/65 leading-relaxed">
                Come experience the warmth, the coffee, and the community that makes Jitterz 
                a beloved Main Street destination.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/visit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-espresso text-cream font-medium rounded-full hover:bg-caramel transition-colors"
                >
                  Visit Us
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-espresso/15 text-espresso font-medium rounded-full hover:bg-espresso hover:text-cream transition-all"
                >
                  See the Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
