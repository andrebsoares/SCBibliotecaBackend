const { Linguagem } = require('../app/models');

module.exports = {
    async store(req, res) {
        const linguagem = await Linguagem.create(req.body);

        return res.json(linguagem);
    },

    async getAll(req, res) {
        const linguagens = await Linguagem.findAll();

        return res.json(linguagens);
    },

    async getById(req, res) {
        const { id } = req.params;

        const linguagem = await Linguagem.findAll({
            where: {
                id: id
            },
        });

        return res.json(linguagem);
    },

    async edit(req, res) {
        const { id } = req.params;

        const linguagem = await Linguagem.update(
            req.body, {
            where: {
                id: id
            }
        }).then(() => {
            res.status(200).json(linguagem)
        }).catch((err) => {
            res.status(500).json({ err })
        })
    },

    async delete(req, res) {
        const { id } = req.params;

        await Linguagem.destroy({
            where: {
                id: id,
            }
        }).then(() => {
            res.status(200).json({ status: "Ok" })
        }).catch((err) => {
            res.status(500).json({ err })
        })
        return res.json();
    },
}