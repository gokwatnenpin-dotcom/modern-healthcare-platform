import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      {/* Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Our Healthcare Services
          </h1>
          <p className="text-text-secondary lg:w-1/2 mx-auto">
            At MediCare+, we offer a comprehensive range of medical services designed
            to meet all your healthcare needs. From preventive care to specialized
            treatments, our expert team is here to support you every step of the way.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">
            How Our Services Work
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 2v4M16 2v4M3 8h18" />
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M12 11v6M9 14h6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">Easy Booking</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    Schedule appointments online or through our app with just a few
                    clicks. Choose your preferred doctor, specialty, and time slot.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 10l4.55-2.28A1 1 0 0 1 21 8.62v6.76a1 1 0 0 1-1.45.9L15 14M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
                      <path d="M8 22v-4M12 22v-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">Virtual or In-Person</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    Choose between convenient telemedicine visits from home or
                    traditional in-person consultations at our modern facilities.
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
                  <h3 className="text-xl font-semibold text-primary-900">Continuous Care</h3>
                  <p className="mt-1 leading-relaxed text-text-secondary">
                    Follow-up appointments, prescription management, and ongoing
                    support to ensure your health goals are met and maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-4">
            What We Offer
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-text-secondary">
            Six core specialties covering prevention, diagnosis, treatment, and urgent care.
          </p>
          <Services />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Do I need insurance to use MediCare+ services?
              </h3>
              <p className="text-text-secondary">
                We accept most major insurance plans and also offer self-pay options
                for those without coverage. Our billing specialists can help you
                understand your benefits and navigate the insurance process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                How do I schedule a telemedicine appointment?
              </h3>
              <p className="text-text-secondary">
                Simply log into your patient portal, select "Telemedicine Visit",
                choose your provider and preferred time, and you'll receive a
                secure video link for your appointment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                What should I bring to my first appointment?
              </h3>
              <p className="text-text-secondary">
                Please bring a valid ID, your insurance card, a list of current
                medications, and any relevant medical records or test results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Are your doctors board-certified?
              </h3>
              <p className="text-text-secondary">
                Yes, all of our physicians are board-certified in their respective
                specialties and maintain active licenses to practice medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-50 p-8 sm:p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              Ready to Book Your First Appointment?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-text-secondary">
              Experience the difference of comprehensive, compassionate healthcare
              tailored to your needs.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-6 py-3">
              Book Appointment Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;