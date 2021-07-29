const { DataTypes } = require('sequelize');
// const { conn } = require('../db.js');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

  sequelize.define('activities',{
    // id: {
    //   type:DataTypes.STRING(3),
    //   primaryKey: true
    // },
    name: {
      type: DataTypes.STRING,
    },
    dificultty: {
      type: DataTypes.ENUM('1','2','3','4','5'),
    },
    duration: {
      type: DataTypes.DECIMAL,
    },
    season: {
      type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
    }
    
  });

};
// - ID
// - Nombre
// - Dificultad (Entre 1 y 5)
// - Duración
// - Temporada (Verano, Otoño, Invierno o Primavera)