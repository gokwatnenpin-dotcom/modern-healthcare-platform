import { Link } from 'react-router-dom';

const doctors = [
  ['Dr. Sarah Chen', 'Cardiology', '15+ years of experience in interventional cardiology and preventive heart care.', '1594824473246-4bace31b9814'],
  ['Dr. Michael Rodriguez', 'Pediatrics', 'Board-certified pediatrician specializing in child development and adolescent health.', '1612349317146-e7d8c7fb5c1a'],
  ['Dr. Amanda Foster', 'Mental wellbeing', 'Licensed clinical psychologist focused on practical, compassionate support.', '1576091160550-2173dba999ef'],
  ['Dr. David Kim', 'Family medicine', 'Family physician focused on prevention and long-term health partnerships.', '1551836022-d5d5140019c6'],
  ['Dr. Lisa Wong', 'Laboratory medicine', 'Pathologist specializing in clear, accurate diagnostic insights.', '1598624352813-24d3b7b7a2ec'],
  ['Dr. James Wilson', 'Urgent care', 'Emergency physician with expertise in trauma care and critical interventions.', '1602091407530-28e4e1f5d8e0'],
];

const Doctors = () => <section className="bg-background-dark py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Your care team</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-900">Meet the people behind your care.</h1><p className="mt-4 leading-7 text-text-secondary">Experienced clinicians who listen carefully and work with you toward better health.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{doctors.map(([name, specialty, bio, image]) => <article key={name} className="overflow-hidden rounded-xl border border-primary-100 bg-white"><img src={`https://images.unsplash.com/photo-${image}?w=700&q=80&fit=crop`} alt={`${name} portrait`} className="h-56 w-full object-cover object-top" /><div className="p-6"><p className="text-xs font-bold uppercase tracking-[.12em] text-primary-600">{specialty}</p><h2 className="mt-2 text-xl font-semibold text-primary-900">{name}</h2><p className="mt-3 text-sm leading-6 text-text-secondary">{bio}</p><Link to="/contact" className="mt-5 inline-flex text-sm font-semibold text-primary-700 hover:text-primary-800">Book with {name.split(' ')[1]} →</Link></div></article>)}</div></div></section>;
export default Doctors;
