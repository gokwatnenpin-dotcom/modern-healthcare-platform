import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getAppointments, getPatientProfile } from '../lib/api';

const DashboardPage = () => {
  const token = localStorage.getItem('medicare-token');
  const [profile, setProfile] = useState(null); const [appointments, setAppointments] = useState([]); const [error, setError] = useState('');
  useEffect(() => { Promise.all([getPatientProfile(), getAppointments()]).then(([patient, booking]) => { setProfile(patient.patient); setAppointments(booking.appointments); }).catch((e) => setError(e.message)); }, []);
  if (!token) return <Navigate to="/login" replace />;
  return <main className="bg-background-dark py-16"><div className="mx-auto max-w-5xl px-4 sm:px-6"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Patient portal</p><h1 className="mt-2 text-4xl font-bold text-primary-900">{profile ? `Hello, ${profile.first_name}` : 'Your care dashboard'}</h1><p className="mt-2 text-text-secondary">Your appointments and care information in one place.</p></div><Link to="/contact" className="rounded-lg bg-primary-700 px-4 py-3 text-sm font-semibold text-white">Book appointment</Link></div>{error && <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}. Make sure PostgreSQL is running.</p>}<section className="mt-10 rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-xl font-semibold text-primary-900">Upcoming appointments</h2>{appointments.length ? <div className="mt-4 space-y-3">{appointments.map((appointment) => <div key={appointment.id} className="rounded-lg border border-primary-100 p-4"><p className="font-medium text-primary-900">Dr. {appointment.provider_first_name} {appointment.provider_last_name}</p><p className="mt-1 text-sm text-text-secondary">{new Date(appointment.starts_at).toLocaleString()} · {appointment.status}</p></div>)}</div> : <p className="mt-4 text-sm text-text-secondary">No appointments yet. <Link className="font-semibold text-primary-700" to="/contact">Request your first visit.</Link></p>}</section></div></main>;
};

export default DashboardPage;
