import { Router } from 'express';
import personaRouter from './persona.route';

const router = Router();

router.use('/persona', personaRouter);

export default router;