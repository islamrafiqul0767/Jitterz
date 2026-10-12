import { AnimatedSection } from '../utils/animations';

export function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">Privacy</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              Privacy information.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed max-w-xl">
              How we handle information on this website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-espresso max-w-none space-y-8">
            <AnimatedSection>
              <h2 className="font-serif text-2xl text-espresso mb-4">About this website</h2>
              <p className="text-espresso/70 leading-relaxed">
                This is an independent website concept created for presentation to the business owner of Jitterz Coffee & Cafe. It is not the official website of Jitterz Coffee & Cafe.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-2xl text-espresso mb-4">Information collection</h2>
              <p className="text-espresso/70 leading-relaxed">
                This website concept does not collect personal information, use cookies for tracking, or require user accounts. No personal data is stored or transmitted through this site.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-serif text-2xl text-espresso mb-4">External links</h2>
              <p className="text-espresso/70 leading-relaxed">
                This website contains links to external services including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-espresso/70 ml-4 mt-3">
                <li>Google Maps (for directions)</li>
                <li>Facebook (business social media page)</li>
                <li>Review platforms (Restaurantji, Yelp, Tripadvisor)</li>
              </ul>
              <p className="text-espresso/70 leading-relaxed mt-3">
                When you click these links, you leave this website and are subject to the privacy policies of those external services.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="font-serif text-2xl text-espresso mb-4">Images and content</h2>
              <p className="text-espresso/70 leading-relaxed">
                Photographs on this website are AI-generated concept imagery used for illustrative purposes. They do not depict the actual Jitterz Coffee & Cafe location, products, staff, or premises unless explicitly stated.
              </p>
              <p className="text-espresso/70 leading-relaxed mt-3">
                Business information (address, phone, hours, menu items) is based on publicly available sources and should be verified with the business before relying on it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="font-serif text-2xl text-espresso mb-4">Analytics and tracking</h2>
              <p className="text-espresso/70 leading-relaxed">
                This website concept does not include analytics tracking, advertising pixels, or third-party data collection scripts. If this website is deployed as the official Jitterz website, the owner may choose to add analytics services, which would have their own privacy implications.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="font-serif text-2xl text-espresso mb-4">Contact</h2>
              <p className="text-espresso/70 leading-relaxed">
                For questions about Jitterz Coffee & Cafe, please contact the business directly:
              </p>
              <div className="mt-4 p-5 bg-ivory rounded-xl border border-espresso/5">
                <p className="text-espresso font-medium">Jitterz Coffee & Cafe</p>
                <p className="text-espresso/70 text-sm mt-1">1073 Main St, Dubuque, IA 52001</p>
                <a href="tel:+15635573838" className="text-caramel hover:text-terracotta transition-colors text-sm mt-1 inline-block">
                  (563) 557-3838
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <p className="text-espresso/50 text-sm italic mt-12 pt-8 border-t border-espresso/10">
                Last updated: 2026. This privacy information applies to this website concept only.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
