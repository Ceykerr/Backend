import db from "../models/index.js";
const Ahorro = db.Ahorro;

export const getAll = async (req, res) => {
    try {
        const ahorros = await Ahorro.findAll();
        res.status(200).json(ahorros);
    } catch {
        res.status(500).json({ error: "Error al obtener ahorros" });
    }
};

export const create = async (req, res) => {
    try {
        const nuevo = await Ahorro.create(req.body);
        res.status(201).json(nuevo);
    } catch {
        res.status(500).json({ error: "Error al crear ahorro" });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;

        const existe = await Ahorro.findByPk(id);
        if (!existe) {
            return res.status(404).json({ error: "Ahorro no encontrado" });
        }

        await Ahorro.update(req.body, { where: { id } });

        res.status(200).json({ mensaje: "Actualizado correctamente" });
    } catch {
        res.status(500).json({ error: "Error al actualizar" });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const existe = await Ahorro.findByPk(id);
        if (!existe) {
            return res.status(404).json({ error: "Ahorro no encontrado" });
        }

        await Ahorro.destroy({ where: { id } });

        res.status(200).json({ mensaje: "Eliminado correctamente" });
    } catch {
        res.status(500).json({ error: "Error al eliminar" });
    }
};