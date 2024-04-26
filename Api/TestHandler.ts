import express, { Request, Response } from "express";
import { Datos } from "../Models/Datos";

const router = express.Router();

// Endpoint GET
router.get("/datos", (req: Request, res: Response) => {
  res.json({ mensaje: "Obtener datos" });
});

// Endpoint POST
router.post("/datos", (req: Request, res: Response) => {
  const datos: Datos = req.body;
  res.json({ mensaje: "Datos recibidos", datos });
});

// Endpoint PUT
router.put("/datos/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const datos = req.body;
  res.json({ mensaje: `Datos actualizados para el ID ${id}`, datos });
});

export default router;
