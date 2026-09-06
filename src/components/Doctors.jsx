const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      bio: '15+ years of experience in interventional cardiology and preventive heart care.',
      imageId: '1594824473246-4bace31b9814'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      specialty: 'Pediatrics',
      bio: 'Board-certified pediatrician specializing in child development and adolescent health.',
      imageId: '1612349317146-e7d8c7fb5c1a'
    },
    {
      id: 3,
      name: 'Dr. Amanda Foster',
      specialty: 'Mental Health',
      bio: 'Licensed clinical psychologist with expertise in cognitive behavioral therapy and stress management.',
      imageId: '1576091160550-2173dba999ef'
    },
    {
      id: 4,
      name: 'Dr. David Kim',
      specialty: 'General Consultation',
      bio: 'Family medicine physician focused on preventive care and chronic disease management.',
      imageId: '1551836022-d5d5140019c6'
    },
    {
      id: 5,
      name: 'Dr. Lisa Wong',
      specialty: 'Laboratory Tests',
      bio: 'Pathologist specializing in diagnostic medicine and laboratory analysis.',
      imageId: '1598624352813-24d3b7b7a2ec'
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialty: 'Emergency Care',
      bio: 'Emergency medicine physician with expertise in trauma care and critical interventions.',
      imageId: '1602091407530-28e4e1f5d8e0'
    }
  ];

  return (
    <section className="py-20 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Our Expert Doctors
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex h-full flex-col bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${doctor.imageId}?w=80&q=80&fit=crop`}
                  alt={`${doctor.name} portrait`}
                  className="h-16 w-16 shrink-0 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-primary-900">{doctor.name}</h3>
                  <p className="text-sm text-text-secondary">{doctor.specialty}</p>
                </div>
              </div>
              <p className="flex-grow leading-relaxed text-text-secondary">{doctor.bio}</p>
              <div className="mt-4 flex justify-start">
                <a href="#" className="inline-flex items-center gap-1.5 text-black hover:text-gray-700 font-medium">
                  View Profile
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;