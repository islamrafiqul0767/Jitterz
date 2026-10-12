import { MapPin, Phone, Facebook, Clock, ExternalLink } from "lucide-react";
import { business, hours, draftHoursNotice } from "../data/business";

export function Visit() {
  return (
    <section id="visit" className="py-16 sm:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            Visit Us
          </h2>
          <p className="mt-3 text-espresso/65 text-lg">
            Stop by and say hello on Main Street.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-cream/50 border border-espresso/5 rounded-lg p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-espresso mb-6">
              Contact & Location
            </h3>
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-caramel mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-espresso font-medium">Address</p>
                  <p className="text-espresso/70 text-sm">{business.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-caramel mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-espresso font-medium">Phone</p>
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="text-espresso/70 text-sm hover:text-caramel transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-3">
                <Facebook size={20} className="text-caramel mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-espresso font-medium">Facebook</p>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso/70 text-sm hover:text-caramel transition-colors inline-flex items-center gap-1"
                  >
                    JitterzDBQ
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={business.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-espresso text-paper font-medium rounded hover:bg-espresso/90 transition-colors text-sm"
              >
                <MapPin size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-espresso text-espresso font-medium rounded hover:bg-espresso hover:text-paper transition-colors text-sm"
              >
                <Phone size={16} />
                Call the Café
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-cream/50 border border-espresso/5 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock size={20} className="text-caramel" />
              <h3 className="font-serif text-xl font-semibold text-espresso">
                Hours
              </h3>
            </div>

            {/* Draft notice */}
            <div className="mb-5 p-3 bg-caramel/10 border border-caramel/20 rounded text-sm text-espresso/80">
              <p className="font-medium text-caramel">{draftHoursNotice}</p>
            </div>

            <div className="space-y-2">
              {hours.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-center justify-between py-2 border-b border-espresso/5 last:border-0"
                >
                  <span className="text-espresso/80 text-sm font-medium">
                    {entry.day}
                  </span>
                  <span className="text-espresso/65 text-sm">
                    {entry.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
