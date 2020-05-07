const { Emprestimo, Livro, Pessoa } = require('../app/models');

module.exports = {
    async store(req, res) {
        // const {livro, pessoa, ...data} = req.body;
        
        const emprestimo = await Emprestimo.create(req.body);

        return res.json(emprestimo);
    },

    async getAll(req, res) {
        const emprestimos = await Emprestimo.findAll({
            subQuery: false,
            include: [
                {
                    model: Livro,
                    as: 'livro'
                },
                {
                    model: Pessoa,
                    as: 'pessoa'
                }
            ]
        });

        return res.json(emprestimos);
    }
}