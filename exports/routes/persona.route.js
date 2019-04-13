import { Router } from 'express';

import { get, create } from '../controllers/persona.controller';
import { idValidator } from '../validators/persona.validator';

const router = Router();

router.post('/create', create);
router.get('/:personaId', [idValidator, get]);

export default router;