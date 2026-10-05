import { Router } from 'express';
import { z } from 'zod';
import { query } from '../db/pool.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
const input = z.object({ providerId: z.string().uuid(), startsAt: z.string().datetime(), endsAt: z.string().datetime(), reason: z.string().max(500).optional(), location: z.string().max(200).optional() });

router.use(authenticate);
router.get('/', async (req, res, next) => {
  try {
    const column = req.user.role === 'provider' ? 'provider_id' : 'patient_id';
    const { rows } = await query(`SELECT a.*, pu.first_name AS patient_first_name, pu.last_name AS patient_last_name, pr.first_name AS provider_first_name, pr.last_name AS provider_last_name
      FROM appointments a JOIN users pu ON pu.id = a.patient_id JOIN users pr ON pr.id = a.provider_id WHERE a.${column} = $1 ORDER BY a.starts_at`, [req.user.sub]);
    res.json({ appointments: rows });
  } catch (error) { next(error); }
});

router.post('/', async (req, res, next) => {
  try {
    if (req.user.role !== 'patient') return res.status(403).json({ error: 'Only patients can request appointments' });
    const values = input.parse(req.body);
    const { rows } = await query(`INSERT INTO appointments (patient_id, provider_id, starts_at, ends_at, reason, location) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [req.user.sub, values.providerId, values.startsAt, values.endsAt, values.reason ?? null, values.location ?? null]);
    res.status(201).json({ appointment: rows[0] });
  } catch (error) { next(error); }
});

router.patch('/:id/status', async (req, res, next) => {
  try {
    const { status } = z.object({ status: z.enum(['confirmed', 'completed', 'cancelled', 'no_show', 'checked_in']) }).parse(req.body);
    const { rows } = await query(`UPDATE appointments SET status = $1 WHERE id = $2 AND (patient_id = $3 OR provider_id = $3) RETURNING *`, [status, req.params.id, req.user.sub]);
    if (!rows[0]) return res.status(404).json({ error: 'Appointment not found' });
    res.json({ appointment: rows[0] });
  } catch (error) { next(error); }
});
export default router;
