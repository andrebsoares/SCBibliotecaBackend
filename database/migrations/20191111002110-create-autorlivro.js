module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('AutorLivro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      autorid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Autor',
          key: 'id',
          foreignKey: 'autorid'
        },
        onDelete: 'CASCADE'
      },
      livroid: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Livro',
          key: 'id',
          foreignKey: 'livroid'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('AutorLivro');
  }
};
