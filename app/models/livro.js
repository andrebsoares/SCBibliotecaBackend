module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define('Livro', {
    titulo: DataTypes.STRING,
    qtdpagina: DataTypes.INTEGER,
    edicao: DataTypes.INTEGER,
    anopublicacao: DataTypes.DATE
  }, {});

  Livro.associate = function (models) {

    Livro.hasMany(models.Emprestimo);
    //   , {
    //   foreignKey: {
    //     name: 'emprestimoid'
    //   },
    // });

    Livro.belongsToMany(models.Autor, {
      through: 'AutorLivro',
      foreignKey: 'livroid',
      as: 'autores',
    });

    Livro.belongsTo(models.Editora, {
      //through: 'Livro',
      foreignKey: 'editoraid',
      as: 'editora'
    });

    Livro.belongsTo(models.Linguagem, {
      //through: 'Livro',
      foreignKey: 'linguagemid',
      as: 'linguagem'
    });

    Livro.belongsTo(models.Genero, {
      //through: 'Livro',
      foreignKey: 'generoid',
      as: 'genero'
    });
  };
  return Livro;
};