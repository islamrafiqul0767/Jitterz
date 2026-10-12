import { motion } from 'framer-motion';
import { AnimatedSection } from '../utils/animations';
import { business } from '../data/business';

const faqs = [
  {
    question: "Where is Jitterz Coffee & Cafe located?",
    answer: `We're located at ${business.addressShort}. We're right on Main Street in downtown Dubuque.`
  },
  {
    question: "What are your hours?",
    answer: "We're open Tuesday through Friday from 7:00 AM to 1:00 PM, and Saturday from 7:00 AM to 12:00 PM. We're closed on Sundays and Mondays."
  },
  {
    question: "Do you have gluten-free options?",
    answer: "Yes! We offer gluten-free muffins among our bakery selection. Please ask our staff about current availability, as our bakery items are made fresh daily."
  },
  {
    question: "Do you serve breakfast all day?",
    answer: "Yes, our breakfast bagel sandwiches are served all day during our open hours."
  },
  {
    question: "Are your pastries homemade?",
    answer: "Yes, all of our pastries are baked from scratch daily by our owner. This includes our famous spinach feta croissant, cinnamon rolls, scones, muffins, and cookies."
  },
  {
    question: "Do you have seating?",
    answer: "Yes, we have a variety of seating options including 1-2 person tables and larger seating areas. We have big windows for natural light and a cozy atmosphere."
  },
  {
    question: "Do you offer milk alternatives?",
    answer: "Yes, we offer milk alternatives for espresso and coffee drinks. Please ask our baristas about available options."
  },
  {
    question: "Is Jitterz good for working or studying?",
    answer: "Many customers use Jitterz as a spot to work or study. We have varied seating options and a welcoming atmosphere. We recommend visiting during off-peak hours for the quietest experience."
  },
  {
    question: "Do you have Wi-Fi?",
    answer: "Please contact us directly to confirm Wi-Fi availability and details."
  },
  {
    question: "Can I call ahead to place an order?",
    answer: `You can reach us at ${business.phone} during our open hours. Please call to ask about ordering options.`
  },
  {
    question: "Do you offer catering or large orders?",
    answer: "Please contact us directly to discuss catering or large order options."
  }
];

export function FAQPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-caramel text-sm uppercase tracking-[0.2em] font-medium mb-3">FAQ</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              Frequently asked questions.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed max-w-xl">
              Everything you need to know about visiting Jitterz Coffee & Cafe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <details className="group bg-ivory rounded-xl border border-espresso/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none hover:bg-ivory/80 transition-colors">
                    <h3 className="font-medium text-espresso text-base sm:text-lg pr-4">
                      {faq.question}
                    </h3>
                    <motion.span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-caramel/10 flex items-center justify-center text-caramel"
                      initial={false}
                    >
                      <svg className="w-4 h-4 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.span>
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-espresso/65 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-espresso/50 text-sm">
              Have another question?{' '}
              <a href={`tel:${business.phoneTel}`} className="text-caramel hover:text-terracotta transition-colors font-medium">
                Give us a call
              </a>
              {' '}or visit us on Main Street.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
