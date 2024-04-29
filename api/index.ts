import express from "express";
import routes from "./Routes";
var bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static('public'));

app.use(urlencodedParser);

app.use("/", routes);

app.get("/", (req: any, res: any) => {
    res.send('Hola mundo');
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "http://localhost";

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${HOST}:${PORT}`);
});

export default app;
