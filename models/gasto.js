const Gasto = (sequelize, DataTypes) => {
  const Gasto = sequelize.define("Gasto", {
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Gasto;
};

export default Gasto;
