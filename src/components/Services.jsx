const serviceIconClass = 'h-6 w-6 text-black';

const ServiceIcons = {
  consultation: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  cardiology: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.2 12h4.3l.5-1 2 4.5 2-7 1.5 3.5h5.3" />
    </svg>
  ),
  pediatrics: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12h.01M15 12h.01M8 20h8c4 0 6-2.5 6-7 0-3.5-2.5-6.5-6-7.5-1-.3-1.5-1-1.5-2V2.5" />
      <path d="M15.5 3.5C14.5 2.6 13 2 11.5 2 7 2 3.5 5.5 3.5 10c0 1.5.5 3 1.2 4.2.3.6.1 1.3-.5 1.6-.6.4-1.2.8-1.7 1.2 1.5 1.5 3.7 2.5 6 2.5" />
      <path d="M10 15.5c.8.8 2.2.8 3 0" />
    </svg>
  ),
  mentalHealth: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.92 3.08A2.5 2.5 0 0 0 4.5 8.75a2.5 2.5 0 0 0 1.96 3.11 2.5 2.5 0 0 0 3.36 2.42A2.5 2.5 0 0 0 12 16.5a2.5 2.5 0 0 0 2.18-2.22 2.5 2.5 0 0 0 3.36-2.42A2.5 2.5 0 0 0 19.5 8.75a2.5 2.5 0 0 0-.62-1.63 2.5 2.5 0 0 0-1.92-3.08A2.5 2.5 0 0 0 12 4.5Z" />
      <path d="M12 4.5V2M9.5 14.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" />
    </svg>
  ),
  laboratory: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8V2" />
      <path d="M8.5 2h7M7 16h10" />
    </svg>
  ),
  emergency: (
    <svg className={serviceIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6v6M9 9h6" />
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  ),
};

const Services = () => {
  const services = [
    {
      icon: ServiceIcons.consultation,
      title: 'General Consultation',
      description: 'See a doctor for any health concern',
    },
    {
      icon: ServiceIcons.cardiology,
      title: 'Cardiology',
      description: 'Expert heart care and monitoring',
    },
    {
      icon: ServiceIcons.pediatrics,
      title: 'Pediatrics',
      description: 'Specialized care for children',
    },
    {
      icon: ServiceIcons.mentalHealth,
      title: 'Mental Health',
      description: 'Therapy, counseling, and support',
    },
    {
      icon: ServiceIcons.laboratory,
      title: 'Laboratory Tests',
      description: 'Fast and accurate diagnostics',
    },
    {
      icon: ServiceIcons.emergency,
      title: 'Emergency Care',
      description: '24/7 urgent medical assistance',
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/5 text-black">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold leading-snug text-primary-900">{service.title}</h3>
          </div>
          <p className="leading-relaxed text-text-secondary">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
