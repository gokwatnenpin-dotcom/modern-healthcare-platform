import { Router } from 'express';
import { query } from '../db/pool.js';

const router = Router();
router.get('/', async (_req, res, next) => {
  try {
    const { rows } = await query(`SELECT u.id, u.first_name, u.last_name, p.specialty, p.bio, p.department
      FROM users u JOIN provider_profiles p ON p.user_id = u.id WHERE u.is_active = TRUE ORDER BY u.last_name`);
    res.json({ providers: rows.map((row) => ({ id: row.id, firstName: row.first_name, lastName: row.last_name, specialty: row.specialty, bio: row.bio, department: row.department })) });
  } catch (error) { next(error); }
});
export default router;
