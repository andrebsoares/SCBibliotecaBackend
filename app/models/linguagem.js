module.exports = (sequelize, DataTypes) => {
  const Linguagem = sequelize.define('Linguagem', {
    descricao: DataTypes.STRING
  }, {});

  Linguagem.associate = function(models) {
    Linguagem.hasMany(models.Livro, {
      foreignKey: {
        name: 'linguagemid'
      }
    })
  };
  
  return Linguagem;
};