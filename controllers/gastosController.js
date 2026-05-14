//const db = require("../models");
import db from "../models/index.js";
const Gasto = db.Gasto;

// GET
export const getAll = async (req, res) => {
  try {
    const gastos = await Gasto.findAll();
    res.status(200).json(gastos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener gastos" });
  }
};

export const create = async (req, res) => {
  try {
    const nuevo = await Gasto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: "Error al crear gasto" });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const existe = await Gasto.findByPk(id);
    if (!existe) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    await Gasto.update(req.body, { where: { id } });

    res.status(200).json({ mensaje: "Actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar" });
  }
};

// DELETE
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const existe = await Gasto.findByPk(id);
    if (!existe) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    await Gasto.destroy({ where: { id } });

    res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
};
