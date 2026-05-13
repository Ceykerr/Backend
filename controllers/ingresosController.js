import db from "../models/index.js";

const Ingreso = db.Ingreso;

export const getAll = async (req, res) => {
    try {
        const ingresos = await Ingreso.findAll();
        res.status(200).json(ingresos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ingresos" });
    }
};

export const create = async (req, res) => {
    try {
        const nuevo = await Ingreso.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: "Error al crear ingreso" });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;

        const existe = await Ingreso.findByPk(id);
        if (!existe) {
            return res.status(404).json({ error: "Ingreso no encontrado" });
        }

        await Ingreso.update(req.body, { where: { id } });

        res.status(200).json({ mensaje: "Actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar" });
    }
};

export const remove = async (req, res) => {
  try {
        const { id } = req.params;

        const existe = await Ingreso.findByPk(id);
        if (!existe) {
            return res.status(404).json({ error: "Ingreso no encontrado" });
        }

        await Ingreso.destroy({ where: { id } });

        res.status(200).json({ mensaje: "Eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
};