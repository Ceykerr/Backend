import express from "express";
import * as controller from "../controllers/ingresosController.js";
import { validarCamposVacios, validarTipos } from "../middlewares/validaciones.js";

const router = express.Router();

router.get("/", controller.getAll);

router.post("/", validarCamposVacios, validarTipos, controller.create);

router.put("/:id", validarCamposVacios, validarTipos, controller.update);

router.remove("/:id", controller.remove);

export default router;