import express from "express";
// import Cultivo from "../models/Cultivo.js";

import { obtenerCultivos, crearCultivo } from "../controllers/cultivoController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";




const router = express.Router();

// router.get("/", async (req, res) => {
//   const cultivos = await Cultivo.find();
//   res.json(cultivos);
// });


// router.post("/", async (req, res) => {
//   const nuevoCultivo = new Cultivo(req.body);
//   await nuevoCultivo.save();
//   res.status(201).json(nuevoCultivo);
// });




router.get("/", authMiddleware(["user", "admin"]), obtenerCultivos);
router.post("/", authMiddleware(["user", "admin"]), crearCultivo);








export default router;