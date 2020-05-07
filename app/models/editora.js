module.exports = (sequelize, DataTypes) => {
  const Editora = sequelize.define('Editora', {
    nome: DataTypes.STRING
  }, {});

  Editora.associate = function(models) {
    Editora.hasMany(models.Livro, {
      foreignKey: {
        name: 'editoraid'
      }
    })
  };

  return Editora;
};