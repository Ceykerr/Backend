module.exports = (sequelize, DataTypes) => {
  const Ahorro = sequelize.define("Ahorro", {
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Ahorro;
};