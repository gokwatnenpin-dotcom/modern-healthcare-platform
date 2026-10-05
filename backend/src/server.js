import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/auth.js';
import providerRoutes from './routes/providers.js';
import appointmentRoutes from './routes/appointments.js';
import patientRoutes from './routes/patients.js';
import healthRoutes from './routes/health.js';
import { errorHandler, notFound } from './middleware/error.js';

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'local-development-only-change-me';
  console.warn('JWT_SECRET is not set; using a development-only secret. Configure backend/.env before deployment.');
}
const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') ?? '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 100 }));
app.get('/', (_req, res) => res.json({ name: 'Modern Healthcare Platform API', version: '1.0.0' }));
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/patients', patientRoutes);
app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Healthcare API listening on http://localhost:${port}`));
