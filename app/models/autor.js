module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('Autor', {
        nome: DataTypes.STRING,
        nacionalidade: DataTypes.STRING
    });

    Autor.associate = function(models) {
        Autor.belongsToMany(models.Livro, {
          through: 'AutorLivro',
          as: 'livros',
          foreignKey: 'autorid'
        });
    };

    return Autor;
}