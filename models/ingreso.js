module.exports = (sequelize, DataTypes) => {
  const Ingreso = sequelize.define("Ingreso", {
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING // salario, extra
    },
    descripcion: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Ingreso;
};