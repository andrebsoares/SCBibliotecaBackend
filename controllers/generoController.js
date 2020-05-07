const { Genero } = require('../app/models');

module.exports = {
    async store(req, res) {
        const genero = await Genero.create(req.body);

        return res.json(genero);
    },

    async getAll(req, res) {
        const generos = await Genero.findAll();

        return res.json(generos);
    },

    async getById(req, res) {
        const { id } = req.params;

        const genero = await Genero.findAll({
            where: {
                id: id
            },
        });

        return res.json(genero);
    },

    async edit(req, res) {
        const { id } = req.params;

        const genero = await Genero.update(
            req.body,
            {
                where: {
                    id: id,
                }
            }
        ).then(() => {
            return res.status(200).json(genero);
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    },

    async delete(req, res) {
        const { id } = req.params;

        await Genero.destroy({
            where: {
                id: id
            },
        }).then(() => {
            return res.status(200).json({ status: "Ok" });
        }).catch((err) => {
            return res.status(500).json({ err});
        });
    }
}