const { Autor } = require('../app/models');

module.exports = {
    async store(req, res) {
        const autor = await Autor.create(req.body);

        return res.json(autor);
    },

    async getAll(req, res) {
        const autores = await Autor.findAll();

        return res.json(autores);
    },

    async getById(req, res) {
        const { id } = req.params;

        const autor = await Autor.findAll({
            where: {
                id: id
            },
        });
        return res.json(autor);
    },

    async edit(req, res) {
        const { id } = req.params;

        const autor = await Autor.update(
            req.body,
            {
                where: {
                    id: id
                }
            }
        ).then(() => {
            return res.status(200).json(autor);
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    },

    async delete(req, res) {
        const { id } = req.params;

        await Autor.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return res.status(200).json({ status: "Ok" });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }

}