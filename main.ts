import express from 'express';
import routes from './Routes';

const app = express();  

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${HOST}:${PORT}`);
});

export default app;