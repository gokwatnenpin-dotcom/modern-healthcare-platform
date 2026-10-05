import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db/pool.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.use(authenticate);
router.get('/me', async (req, res, next) => {
  try {
    const { rows } = await query(`SELECT u.id, u.email, u.first_name, u.last_name, p.date_of_birth, p.phone, p.address, p.emergency_contact, p.insurance FROM users u LEFT JOIN patient_profiles p ON p.user_id = u.id WHERE u.id = $1`, [req.user.sub]);
    if (!rows[0]) return res.status(404).json({ error: 'Patient not found' });
    res.json({ patient: rows[0] });
  } catch (error) { next(error); }
});
router.patch('/me', async (req, res, next) => {
  try {
    const values = z.object({ phone: z.string().max(50).optional(), address: z.record(z.string(), z.string()).optional(), emergencyContact: z.record(z.string(), z.string()).optional(), insurance: z.record(z.string(), z.string()).optional() }).parse(req.body);
    const { rows } = await query(`UPDATE patient_profiles SET phone = COALESCE($1, phone), address = COALESCE($2, address), emergency_contact = COALESCE($3, emergency_contact), insurance = COALESCE($4, insurance), updated_at = NOW() WHERE user_id = $5 RETURNING *`, [values.phone ?? null, values.address ? JSON.stringify(values.address) : null, values.emergencyContact ? JSON.stringify(values.emergencyContact) : null, values.insurance ? JSON.stringify(values.insurance) : null, req.user.sub]);
    res.json({ profile: rows[0] });
  } catch (error) { next(error); }
});
router.get('/me/records', async (req, res, next) => {
  try { const { rows } = await query('SELECT * FROM medical_records WHERE patient_id = $1 ORDER BY recorded_at DESC', [req.user.sub]); res.json({ records: rows }); } catch (error) { next(error); }
});
router.get('/me/medications', async (req, res, next) => {
  try { const { rows } = await query('SELECT * FROM medications WHERE patient_id = $1 ORDER BY is_active DESC, name', [req.user.sub]); res.json({ medications: rows }); } catch (error) { next(error); }
});
export default router;
