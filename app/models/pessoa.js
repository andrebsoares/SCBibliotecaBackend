module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa', {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        tipousuario: DataTypes.ENUM('Aluno', 'Administrador', 'Funcionario'),
        senha: DataTypes.STRING,
        endereco: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        cep: DataTypes.STRING,
        celular: DataTypes.STRING,
        email: DataTypes.STRING
    });

    Pessoa.associate = function(models) {
        Pessoa.hasOne(models.Emprestimo, {
            foreignKey: 'pessoaid',
            as: "pessoa"
        }); 
    }

    return Pessoa;
}