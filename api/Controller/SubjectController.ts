import express, { Request, Response } from 'express';

const router = express.Router();

// Endpoint GET para obtener productos
router.get('/productos', (req: Request, res: Response) => {
    // Lógica para obtener productos
    res.json({ mensaje: 'Obtener productos' });
});

// Endpoint POST para crear productos
router.post('/productos', (req: Request, res: Response) => {
    // Lógica para crear productos
    res.json({ mensaje: 'Producto creado' });
});

export default router;
