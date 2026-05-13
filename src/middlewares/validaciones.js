export const validarCamposVacios = (req, res, next) => {
    const datos = req.body;

    for (let key in datos) {
        if (datos[key] === "" || datos[key] === null) {
            return res.status(400).json({
                error: `El campo ${key} está vacío`
            });
        }
    }

    next();
};

export const validarTipos = (req, res, next) => {
    const { monto, fecha } = req.body;

   if (monto && isNaN(Number(monto))) {
    return res.status(400).json({
        error: "El monto debe ser un número"
    });
}

    if (fecha && isNaN(Date.parse(fecha))) {
        return res.status(400).json({
            error: "La fecha no es válida"
        });
    }

    next();
};