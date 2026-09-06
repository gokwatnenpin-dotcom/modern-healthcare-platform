import { Link } from 'react-router-dom';

const socialIconWrapper =
  'flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black transition-colors hover:bg-black/10';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.2 12h4.3l.5-1 2 4.5 2-7 1.5 3.5h5.3" />
                </svg>
              </span>
              <span className="text-xl font-bold text-black">MediCare+</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Innovating healthcare delivery through technology. Compassionate, accessible care for
              every stage of life.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className={socialIconWrapper}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className={socialIconWrapper}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.9-6.4L6.47 22H3.34l7.24-8.28L1.2 2h6.4l4.43 5.85L18.9 2Zm-1.1 18.1h1.73L6.86 3.8H5.01L17.8 20.1Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={socialIconWrapper}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                  <circle cx="12" cy="12" r="4.25" />
                  <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={socialIconWrapper}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="transition-colors hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="transition-colors hover:text-black">
                  Our Doctors
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Press &amp; Partners
                </a>
              </li>
            </ul>
          </nav>

          {/* Services / Resources */}
          <nav aria-label="Services">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="transition-colors hover:text-black">
                  General Consultation
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-black">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-black">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-black">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-black">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  123 Healthcare Avenue,
                  <br />
                  Medical City, MC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <a href="tel:+15551234567" className="transition-colors hover:text-black">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <a
                  href="mailto:info@medicareplus.com"
                  className="break-all transition-colors hover:text-black"
                >
                  info@medicareplus.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span className="leading-relaxed">
                  Mon – Fri: 8:00 – 20:00
                  <br />
                  Emergency: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>&copy; {year} MediCare+. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
