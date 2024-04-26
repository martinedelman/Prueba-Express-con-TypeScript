import { Router } from 'express';
import testRoutes from './Api/TestHandler'; 
import usuariosRoutes from './Api/UserHandler';
import productosRoutes from './Api/SubjectHandler';

const router = Router();

const V1Route = '/v1/api';

// Agregar todas las rutas aquí
router.use(V1Route, testRoutes);
router.use(V1Route, usuariosRoutes);
router.use(V1Route, productosRoutes);

export default router;