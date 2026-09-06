const inputClass =
  'block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-4">
          Contact Us
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-text-secondary">
          Have questions or need assistance? Reach out — we respond within one business day.
        </p>
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">Get In Touch</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Have questions or need assistance? We&apos;re here to help. Reach out to us via phone,
              email, or visit our office.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Call Us</h4>
                  <p className="mt-0.5 text-text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Email Us</h4>
                  <p className="mt-0.5 text-text-secondary">info@medicareplus.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center bg-black/5 rounded-full">
                    <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Visit Us</h4>
                  <p className="mt-0.5 leading-relaxed text-text-secondary">
                    123 Healthcare Avenue<br />
                    Medical City, MC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-primary-900 mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className={inputClass}
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
