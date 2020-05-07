module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Genero', {
    descricao: DataTypes.STRING
  }, {});

  Genero.associate = function(models) {
    Genero.hasMany(models.Livro, {
      foreignKey: {
        name: 'generoid'
      }
    })
  };

  return Genero;
};