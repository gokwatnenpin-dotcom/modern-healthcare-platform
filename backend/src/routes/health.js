import { Router } from 'express';
import { query } from '../db/pool.js';
const router = Router();
router.get('/', async (_req, res, next) => { try { await query('SELECT 1'); res.json({ status: 'ok', service: 'healthcare-api', timestamp: new Date().toISOString() }); } catch (error) { next(error); } });
export default router;
