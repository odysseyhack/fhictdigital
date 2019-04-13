import { Router } from 'express';

import { get, create, reassign } from '../controllers/persona.controller';
import { cookieIdValidator } from '../validators/persona.validator';

const router = Router();

router.post('/create', create);
router.get('/reassign', reassign);
router.get('/', [cookieIdValidator, get]);

export default router;