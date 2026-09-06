const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          About MediCare+
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Our Mission</h3>
            <p className="text-text-secondary">
              At MediCare+, we believe that exceptional healthcare should be accessible to everyone.
              Our mission is to leverage technology to break down barriers in healthcare delivery,
              providing personalized, compassionate, and efficient medical services to patients
              across all demographics.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Our Vision</h3>
            <p className="text-text-secondary">
              To become the leading digital healthcare platform that transforms the patient experience
              through innovation, quality, and unwavering commitment to patient wellbeing. We envision
              a world where everyone has access to the best medical care at their fingertips.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary-900 mb-6">Why Choose Us?</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Patient-Centered Care</h4>
                  <p className="mt-1 text-text-secondary leading-relaxed">
                    We put you at the center of everything we do, tailoring our services to your
                    unique health needs and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Cutting-Edge Technology</h4>
                  <p className="mt-1 text-text-secondary leading-relaxed">
                    We leverage the latest advancements in medical technology to provide accurate
                    diagnoses, effective treatments, and seamless patient experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Compassionate Support</h4>
                  <p className="mt-1 text-text-secondary leading-relaxed">
                    Our team of healthcare professionals is dedicated to providing empathetic,
                    supportive care throughout your health journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;