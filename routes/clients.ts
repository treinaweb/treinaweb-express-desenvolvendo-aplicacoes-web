import { Router } from 'express';
import clientsController from '../controllers/clientController';

const router = Router();

router.get('/', clientsController.index);

export default router;