const { Editora } = require('../app/models');

module.exports = {
    async store(req, res) {
        const editora = await Editora.create(req.body);

        return res.json(editora);
    },

    async getAll(req, res) {
        const editoras = await Editora.findAll();

        return res.json(editoras);
    },

    async getById(req, res) {
        const { id } = req.params;

        const editora = await Editora.findAll({
            where: {
                id: id
            },
        });

        return res.json(editora);
    },

    async edit(req, res) {
        const { id } = req.params;

        const editora = await Editora.update(
            req.body,
            {
                where: {
                    id: id
                }
            }
        ).then(() => {
            return res.status(200).json(editora);
        }).catch((err) => {
            return res.status(500).json({ err});
        });
    },

    async delete(req, res) {
        const { id } = req.params;

        await Editora.destroy({
            where: {
                id: id
            },
        }).then(() => {
            return res.status(200).json({ status: "Ok" });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    },
}