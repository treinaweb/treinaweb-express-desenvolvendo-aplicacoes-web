import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Rota Principal</h1>')
})

router.get('/sobre', (req, res) => {
    res.send('<h1>Sobre a TreinaWeb</h1>')
})

export default router;