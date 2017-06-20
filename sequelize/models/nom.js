'use strict';
module.exports = function(sequelize, DataTypes) {
  var Nom = sequelize.define('Nom', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Nom;
};