import { useState, useEffect } from 'react';

const Hero = ({ getStartedLink = "#services", learnMoreLink = "#about" }) => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold leading-tight text-primary-900 sm:text-5xl mb-6">
              Your Health, Our Priority
            </h1>
            <p className="max-w-xl text-text-secondary mb-8 leading-relaxed">
              World-class healthcare at your fingertips. Book appointments, consult doctors, and manage your health — all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getStartedLink}
                className="inline-flex items-center justify-center text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-200"
              >
                Get Started
              </a>
              <a
                href={learnMoreLink}
                className="inline-flex items-center justify-center text-secondary-800 border border-secondary-300 hover:bg-secondary-50 focus:ring-4 focus:ring-secondary-200 font-medium rounded-lg text-sm px-6 py-3 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative mt-10 pb-14 lg:mt-0 lg:w-1/2 lg:pb-12">
            {/* Hero Image */}
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&fit=crop"
              alt="Doctor smiling in bright clinical setting"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
            {/* Floating Stats Card */}
            {showStats && (
              <div className="absolute bottom-0 left-4 right-4 flex items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-lg sm:left-6 sm:right-auto sm:w-[22rem]">
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-primary-900">10,000+</p>
                  <p className="text-sm text-text-secondary">Patients</p>
                </div>
                <div className="h-10 w-px bg-slate-200" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-primary-900">200+</p>
                  <p className="text-sm text-text-secondary">Doctors</p>
                </div>
                <div className="h-10 w-px bg-slate-200" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-primary-900">15+</p>
                  <p className="text-sm text-text-secondary">Specialties</p>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;