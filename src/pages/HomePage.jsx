import Hero from '../components/Hero';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <>
      <Hero
        getStartedLink="/services"
        learnMoreLink="/about"
      />
      {/* Intro section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Comprehensive Care for Every Stage of Life
          </h2>
          <p className="text-text-secondary lg:w-2/3 mx-auto">
            At MediCare+, we combine cutting-edge medical technology with compassionate,
            personalized care to ensure you and your family receive the best possible
            health outcomes. From preventive wellness to specialized treatments, our
            integrated approach puts your wellbeing at the center of everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us Highlights */}
      <section className="bg-background-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-10">
            Why Patients Choose MediCare+
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">Personalized Care</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    Tailored treatment plans designed specifically for your unique
                    health needs and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">Advanced Technology</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    State-of-the-art diagnostic tools and telemedicine platforms
                    for accurate and convenient care.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">Compassionate Support</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    Our dedicated team provides empathetic care throughout your
                    health journey, ensuring you never feel alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-10">
            What Our Patients Say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="italic text-text-secondary mb-4">
                "MediCare+ transformed my healthcare experience. The doctors are
                knowledgeable, the staff is caring, and the technology makes
                everything so convenient."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=40&fit=crop&face=face" alt="Patient testimonial" className="h-10 w-10 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Jennifer M.</h4>
                  <p className="text-sm text-text-secondary">Verified Patient</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="italic text-text-secondary mb-4">
                "After struggling with chronic pain for years, the specialized
                care team at MediCare+ finally gave me relief and hope for the
                future."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=40&fit=crop&face=face" alt="Patient testimonial" className="h-10 w-10 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Robert T.</h4>
                  <p className="text-sm text-text-secondary">Verified Patient</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="italic text-text-secondary mb-4">
                "The telemedicine service allowed me to consult with a specialist
                from home during my recovery. It was incredibly convenient and
                effective."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&q=40&fit=crop&face=face" alt="Patient testimonial" className="h-10 w-10 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Aisha K.</h4>
                  <p className="text-sm text-text-secondary">Verified Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-50 p-8 sm:p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-text-secondary">
              Join thousands of satisfied patients who have chosen MediCare+ for
              their healthcare needs.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-6 py-3">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-4">
            Our Core Services
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-text-secondary">
            Comprehensive care across specialties, backed by expert doctors and modern technology.
          </p>
          <Services />
        </div>
      </section>
    </>
  );
};

export default HomePage;