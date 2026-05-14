import express from "express";
import * as controller from "../controllers/ahorrosController.js";
import {
  validarCamposVacios,
  validarTipos,
} from "../src/middlewares/validaciones.js";

const router = express.Router();

router.get("/", controller.getAll);

router.post("/", validarCamposVacios, validarTipos, controller.create);

router.put("/:id", validarCamposVacios, validarTipos, controller.update);

router.delete("/:id", controller.remove);
// Remove no existe, así que lo cambié por delete que si es un verbo http

export default router;
