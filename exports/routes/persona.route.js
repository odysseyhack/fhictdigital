import { Router } from 'express';

import { get, create, reassign, updateAll } from '../controllers/persona.controller';
import { cookieIdValidator, personaDataValidator } from '../validators/persona.validator';

const router = Router();

router.post('/create', [personaDataValidator, create]);
router.post('/reassign', [cookieIdValidator, personaDataValidator, reassign]);
router.post('/updateAll', updateAll);
router.get('/', [cookieIdValidator, get]);

export default router;