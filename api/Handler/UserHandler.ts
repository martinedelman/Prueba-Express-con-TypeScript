import express, { Request, Response } from 'express';

const router = express.Router();

// Endpoint GET para obtener usuarios
router.get('/usuarios', (req: Request, res: Response) => {
    // Lógica para obtener usuarios
    res.json({ mensaje: 'Obtener usuarios' });
});

// Endpoint POST para crear usuarios
router.post('/usuarios', (req: Request, res: Response) => {
    // Lógica para crear usuarios
    res.json({ mensaje: 'Usuario creado' });
});

export default router;
