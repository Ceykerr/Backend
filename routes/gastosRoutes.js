import express from "express";
import * as controller from "../controllers/gastosController.js";
import {
  validarCamposVacios,
  validarTipos,
} from "../src/middlewares/validaciones.js";

const router = express.Router();

router.get("/", controller.getAll);

router.post("/", validarCamposVacios, validarTipos, controller.create);

router.put("/:id", validarCamposVacios, validarTipos, controller.update);

router.delete("/:id", controller.remove);

export default router;
