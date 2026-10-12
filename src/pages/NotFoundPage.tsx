import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="font-serif text-8xl sm:text-9xl text-caramel/20 mb-4">404</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-espresso mb-4">Page not found</h1>
        <p className="text-espresso/60 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream font-medium rounded-full hover:bg-caramel transition-colors"
        >
          <Home size={16} />
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
