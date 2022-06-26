"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctocClinicSpecialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctocClinicSpecialty.init(
    {
      doctorId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      specialty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DoctocClinicSpecialty",
    }
  );
  return DoctocClinicSpecialty;
};
