import { MapPin, Phone, Facebook, Clock, ExternalLink, Navigation } from "lucide-react";
import { business, hours, draftHoursNotice, images } from "../data/business";

export function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-caramel text-sm uppercase tracking-widest font-medium mb-3">
              Visit Us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso leading-tight">
              We'd love to see you.
            </h1>
            <p className="mt-5 text-lg text-espresso/65 leading-relaxed">
              Find us on Main Street in downtown Dubuque. Stop by for a coffee, a pastry, or just a friendly hello.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact & Location */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-cream/50 border border-espresso/5 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center">
                    <MapPin size={20} className="text-caramel" />
                  </div>
                  <h2 className="font-serif text-xl text-espresso">Location</h2>
                </div>
                <p className="text-espresso/80 text-lg font-medium">
                  {business.address}
                </p>
                <a
                  href={business.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-espresso text-paper text-sm font-medium rounded-full hover:bg-caramel transition-colors"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-cream/50 border border-espresso/5 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center">
                    <Phone size={20} className="text-caramel" />
                  </div>
                  <h2 className="font-serif text-xl text-espresso">Phone</h2>
                </div>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="text-espresso/80 text-lg font-medium hover:text-caramel transition-colors"
                >
                  {business.phone}
                </a>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 border-2 border-espresso/15 text-espresso text-sm font-medium rounded-full hover:bg-espresso hover:text-paper transition-all"
                >
                  <Phone size={14} />
                  Call the Café
                </a>
              </div>

              {/* Facebook Card */}
              <div className="bg-cream/50 border border-espresso/5 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center">
                    <Facebook size={20} className="text-caramel" />
                  </div>
                  <h2 className="font-serif text-xl text-espresso">Social</h2>
                </div>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-espresso/80 hover:text-caramel transition-colors"
                >
                  <span className="font-medium">Follow us on Facebook</span>
                  <ExternalLink size={14} />
                </a>
                <p className="mt-2 text-sm text-espresso/50">
                  Stay updated with the latest from Jitterz.
                </p>
              </div>
            </div>

            {/* Hours & Map */}
            <div className="space-y-8">
              {/* Hours Card */}
              <div className="bg-cream/50 border border-espresso/5 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center">
                    <Clock size={20} className="text-caramel" />
                  </div>
                  <h2 className="font-serif text-xl text-espresso">Hours</h2>
                </div>

                {/* Draft Notice */}
                <div className="mb-6 p-4 bg-butter/20 border border-caramel/20 rounded-xl">
                  <p className="text-sm text-espresso/80 font-medium flex items-start gap-2">
                    <span className="text-caramel">⚠</span>
                    {draftHoursNotice}
                  </p>
                </div>

                <div className="space-y-0">
                  {hours.map((entry, index) => (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between py-3 ${
                        index < hours.length - 1 ? 'border-b border-espresso/5' : ''
                      }`}
                    >
                      <span className="text-espresso/80 text-sm font-medium min-w-[100px]">
                        {entry.day}
                      </span>
                      <span className={`text-sm ${
                        entry.time === 'Closed' ? 'text-espresso/40' : 'text-espresso/70'
                      }`}>
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map/Location Visual */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream">
                <img
                  src={images.storefront}
                  alt="Neighborhood café storefront on a charming Main Street"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-cream font-serif text-lg">1073 Main Street</p>
                  <p className="text-cream/70 text-sm">Downtown Dubuque, Iowa</p>
                  <a
                    href={business.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-paper/90 text-espresso text-sm font-medium rounded-full hover:bg-paper transition-colors"
                  >
                    <MapPin size={14} />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
