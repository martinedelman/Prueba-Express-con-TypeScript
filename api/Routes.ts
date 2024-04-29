import { Router } from 'express';
import testRoutes from './Handler/TestHandler'; 
import usuariosRoutes from './Handler/UserHandler';
import productosRoutes from './Handler/SubjectHandler';

const router = Router();

const V1Route = '/api/v1';

// Agregar todas las rutas aquí
router.use(V1Route, testRoutes);
router.use(V1Route, usuariosRoutes);
router.use(V1Route, productosRoutes);

export default router;