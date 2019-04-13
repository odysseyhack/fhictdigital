import { Router } from 'express';

import { get } from '../controllers/persona.controller';
import { idValidator } from '../validators/persona.validator';

const router = Router();

router.get('/:personaId', [idValidator, get]);

export default router;