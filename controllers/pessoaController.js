const { Pessoa } = require('../app/models');

module.exports = {
    async store(req, res) {
        const pessoa = await Pessoa.create(req.body);

        return res.json(pessoa);
    },

    async getAll(req, res) {
        const pessoas = await Pessoa.findAll();

        return res.json(pessoas);
    },

    async getById(req, res) {
        const { id } = req.params;

        const pessoa = await Pessoa.findAll({
            where: {
                id: id
            }
        })

        return res.json(pessoa);
    },

    async edit(req, res) {
        const { id } = req.params;

        const pessoa = await Pessoa.update(
            req.body,
            {
                where: {
                    id: id
                },
            }
        ).then(() => {
            return res.status(200).json(pessoa);
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    },

    async delete(req, res) {
        const id = req.params.id;

        await Pessoa.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return res.status(200).json({ status: "Ok" });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    },
};