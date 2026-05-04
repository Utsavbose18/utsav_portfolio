import { Router } from 'express';
import { submitMessage } from '../controllers/messageController.js';

const router = Router();

router.post('/', submitMessage);

export default router;
