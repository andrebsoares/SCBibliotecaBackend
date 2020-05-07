module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Emprestimo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      livroid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Livro',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      pessoaid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Pessoa',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      dataemprestimo: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      datadevolucao: {
        allowNull: false,
        type: DataTypes.DATE,
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
    return queryInterface.dropTable('Emprestimo');
  }
};
