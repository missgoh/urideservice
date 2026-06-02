export default function URideLuxuryWebsite() {
  const services = [
    {
      title: 'Airport Transfer',
      desc: 'Premium chauffeur service for KLIA, Penang Airport, and major Malaysia airports.',
      icon: '✈️',
    },
    {
      title: 'Cross State Travel',
      desc: 'Comfortable long-distance travel across Malaysia with luxury MPV experience.',
      icon: '🛣️',
    },
    {
      title: 'Private Charter',
      desc: 'Flexible private transportation tailored to your schedule and destination.',
      icon: '🚘',
    },
    {
      title: 'Family Travel',
      desc: 'Spacious and comfortable rides for families with luggage and children.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Business Travel',
      desc: 'Professional transportation experience for executives and corporate clients.',
      icon: '💼',
    },
    {
      title: 'Singapore Transfer',
      desc: 'Luxury private transfer between Malaysia and Singapore with peace of mind.',
      icon: '🇸🇬',
    },
  ]

  const trustItems = [
    'Registered Company',
    'Professional Chauffeur',
    'Fixed Transparent Pricing',
    'Comfortable Premium MPV',
    'Long Distance Specialist',
    'Family Friendly Service',
  ]

  const whyChooseUs = [
    {
      title: 'Safety First',
      desc: 'Experienced chauffeurs and carefully maintained premium vehicles.',
      icon: '🛡️',
    },
    {
      title: 'Luxury Comfort',
      desc: 'Relax in spacious captain seats with smooth long-distance comfort.',
      icon: '✨',
    },
    {
      title: 'Always Punctual',
      desc: 'Reliable arrival timing for airport transfers and important schedules.',
      icon: '⏰',
    },
    {
      title: 'Professional Service',
      desc: 'Premium concierge-style experience from pickup to destination.',
      icon: '🤝',
    },
    {
      title: 'Clean Vehicles',
      desc: 'Every ride is prepared with cleanliness and passenger comfort in mind.',
      icon: '🧼',
    },
    {
      title: 'Personalized Journey',
      desc: 'Tailored service experience for families, tourists, and business travelers.',
      icon: '⭐',
    },
  ]

  const reviews = [
    {
      name: 'Family Traveler',
      review:
        'Very comfortable airport transfer for our whole family. The Alphard was spacious and extremely clean.',
    },
    {
      name: 'Business Client',
      review:
        'Professional and punctual service. The premium experience feels more like a luxury concierge service.',
    },
    {
      name: 'Female Traveler',
      review:
        'I felt very safe throughout the journey. Smooth driving and excellent communication.',
    },
  ]

  const faqs = [
    {
      q: 'Are there any hidden charges?',
      a: 'No. All pricing is transparent and confirmed before your journey begins.',
    },
    {
      q: 'Is there midnight surcharge?',
      a: 'Certain late-night pickups may include a small surcharge depending on timing.',
    },
    {
      q: 'What if my flight is delayed?',
      a: 'We monitor flight arrivals and provide waiting time for airport pickups.',
    },
    {
      q: 'Do you charge waiting fees?',
      a: 'Airport pickup includes complimentary waiting time. Additional waiting may apply after the grace period.',
    },
    {
      q: 'Can invoice be provided?',
      a: 'Yes. Official invoices can be issued upon request.',
    },
    {
      q: 'Do you provide cross-state services?',
      a: 'Yes. We specialize in comfortable long-distance and cross-state private transportation.',
    },
  ]

  return (
    <div className="bg-black text-white overflow-hidden scroll-smooth font-sans">
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/60123456789"
        className="fixed bottom-6 right-6 z-50 bg-[#C8A96A] text-black px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 font-semibold"
      >
        WhatsApp
      </a>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C8A96A]/40 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-[0.2em] uppercase text-[#C8A96A] mb-6">
              URide Service
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-6">
              Premium Airport &
              <span className="block text-[#C8A96A]">Private Chauffeur Service</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 mb-10 leading-relaxed">
              Ipoh • KLIA • Penang • Singapore
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-[#C8A96A] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-2xl">
                Book via WhatsApp
              </button>

              <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">
                View Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#C8A96A]/20 blur-3xl rounded-full" />

            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(200,169,106,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1400&auto=format&fit=crop"
                alt="Luxury chauffeur"
                className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-white/10 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#C8A96A]/20 flex items-center justify-center mb-4 text-[#C8A96A] text-xl">
                ✓
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              Premium Services
            </p>
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Luxury Chauffeur Experience
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              Premium transportation designed for comfort, professionalism, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-[#C8A96A]/40 hover:bg-white/[0.08] transition duration-500"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4 font-light">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Section */}
      <section className="py-28 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              Premium Vehicle
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Luxury Toyota Alphard Experience
            </h2>

            <div className="space-y-5 text-white/70 text-lg">
              <div className="flex gap-4 items-start">
                <span className="text-[#C8A96A]">✦</span>
                Spacious legroom for relaxing long-distance journeys
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C8A96A]">✦</span>
                Premium captain seats with maximum comfort
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C8A96A]">✦</span>
                Large luggage capacity for airport travelers
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C8A96A]">✦</span>
                Smooth and quiet ride experience
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C8A96A]">✦</span>
                Elegant premium interior ambient lighting
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[28px] h-80 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[28px] h-80 w-full object-cover mt-10"
            />
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[28px] h-80 w-full object-cover -mt-10"
            />
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[28px] h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              Why Choose URide
            </p>
            <h2 className="text-4xl md:text-6xl font-light">
              Premium Service You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-[#C8A96A]/40 transition duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl mb-4 font-light">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 bg-[#080808] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              Customer Reviews
            </p>
            <h2 className="text-4xl md:text-6xl font-light">
              Trusted By Travelers
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >
                <div className="flex text-[#C8A96A] text-xl mb-6">★★★★★</div>
                <p className="text-white/70 leading-relaxed mb-8 text-lg">
                  “{review.review}”
                </p>
                <div className="text-white font-medium">{review.name}</div>
                <div className="text-white/40 text-sm mt-1">Google Review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-6xl font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl mb-4 font-light">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-4">
              Gallery
            </p>
            <h2 className="text-4xl md:text-6xl font-light">
              Luxury Travel Moments
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop',
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[30px] border border-white/10"
              >
                <img
                  src={img}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111111] to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.35),transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C8A96A] tracking-[0.25em] uppercase text-sm mb-5">
            URide Service
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Travel In Comfort & Peace Of Mind
          </h2>

          <p className="text-white/60 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience premium airport transfer and luxury private chauffeur service designed for families, tourists, and business travelers across Malaysia.
          </p>

          <button className="bg-[#C8A96A] text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-[0_0_60px_rgba(200,169,106,0.35)]">
            Book via WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-light mb-5 text-[#C8A96A]">
              URide Service
            </h3>
            <p className="text-white/50 leading-relaxed">
              Premium chauffeur and airport transfer service in Malaysia.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg">Social Media</h4>
            <div className="space-y-3 text-white/60">
              <div>WhatsApp</div>
              <div>Xiaohongshu</div>
              <div>Facebook</div>
              <div>Instagram</div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg">Business Hours</h4>
            <div className="space-y-3 text-white/60">
              <div>Daily Operation</div>
              <div>24/7 Airport Transfer</div>
              <div>Advance Booking Available</div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg">Service Areas</h4>
            <div className="space-y-3 text-white/60">
              <div>Ipoh</div>
              <div>KLIA</div>
              <div>Penang</div>
              <div>Singapore</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
