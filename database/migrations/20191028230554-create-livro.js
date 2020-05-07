module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Livro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      qtdpagina: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      edicao: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      anopublicacao: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      editoraid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { 
          model: 'Editora', 
          key: 'id',
          foreignKey: 'editoraid' },
      },
      linguagemid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { 
          model: 'Linguagem', 
          key: 'id',
          foreignKey: 'linguagemid' },
      },
      generoid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { 
          model: 'Genero', 
          key: 'id',
          foreignKey: 'generoid'},
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Livro');
  }
};