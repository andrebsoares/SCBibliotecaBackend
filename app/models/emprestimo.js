module.exports = (sequelize, DataTypes) => {
    const Emprestimo = sequelize.define('Emprestimo', {
        dataemprestimo: DataTypes.DATE,
        datadevolucao: DataTypes.DATE,
    }, {});

    Emprestimo.associate = function (models) {
        Emprestimo.belongsTo(models.Livro, {
            foreignKey: 'livroid',
            constraints: false,
            as: 'livro'            
        });

        Emprestimo.belongsTo(models.Pessoa, {
            foreignKey: 'pessoaid',
            constraints: false,
            as: 'pessoa'
          });
    };

    return Emprestimo;
}