import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { query } from '../db/pool.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
const credentials = z.object({ email: z.string().email(), password: z.string().min(8), firstName: z.string().min(1), lastName: z.string().min(1) });
const publicUser = (row) => ({ id: row.id, email: row.email, firstName: row.first_name, lastName: row.last_name, role: row.role });
const tokenFor = (row) => jwt.sign({ sub: row.id, email: row.email, role: row.role }, process.env.JWT_SECRET, { expiresIn: '8h' });

router.post('/register', async (req, res, next) => {
  try {
    const input = credentials.parse(req.body);
    const hash = await bcrypt.hash(input.password, 12);
    const result = await query(`INSERT INTO users (email, password_hash, first_name, last_name) VALUES ($1,$2,$3,$4) RETURNING *`, [input.email, hash, input.firstName, input.lastName]);
    await query('INSERT INTO patient_profiles (user_id) VALUES ($1)', [result.rows[0].id]);
    res.status(201).json({ user: publicUser(result.rows[0]), token: tokenFor(result.rows[0]) });
  } catch (error) { next(error); }
});

router.post('/login', async (req, res, next) => {
  try {
    const input = z.object({ email: z.string().email(), password: z.string() }).parse(req.body);
    const result = await query('SELECT * FROM users WHERE email = $1 AND is_active = TRUE', [input.email]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(input.password, user.password_hash))) return res.status(401).json({ error: 'Invalid email or password' });
    res.json({ user: publicUser(user), token: tokenFor(user) });
  } catch (error) { next(error); }
});

router.get('/me', authenticate, async (req, res, next) => {
  try {
    const { rows } = await query('SELECT id, email, first_name, last_name, role FROM users WHERE id = $1 AND is_active = TRUE', [req.user.sub]);
    if (!rows[0]) return res.status(404).json({ error: 'User not found' });
    res.json({ user: publicUser(rows[0]) });
  } catch (error) { next(error); }
});

export default router;
