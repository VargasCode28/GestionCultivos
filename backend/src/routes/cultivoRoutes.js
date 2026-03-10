import express from "express";
import { obtenerCultivos, crearCultivo, marcarComoCosechado } from "../controllers/cultivoController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";




const router = express.Router();




router.put("/:id/cosechar", authMiddleware(["user","admin"]), marcarComoCosechado);

router.get("/", authMiddleware(["user", "admin"]), obtenerCultivos);
router.post("/", authMiddleware(["user", "admin"]), crearCultivo);








export default router;