const apiBaseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

const apiRequest = async (path, options = {}) => {
  const token = localStorage.getItem('medicare-token');
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Request failed');
  return data;
};

export const getProviders = () => apiRequest('/api/providers');
export const getHealth = () => apiRequest('/api/health');
export const login = (credentials) => apiRequest('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
export const register = (details) => apiRequest('/api/auth/register', { method: 'POST', body: JSON.stringify(details) });
export const getPatientProfile = () => apiRequest('/api/patients/me');
export const getAppointments = () => apiRequest('/api/appointments');
export const createAppointment = (details) => apiRequest('/api/appointments', { method: 'POST', body: JSON.stringify(details) });
export { apiRequest };
