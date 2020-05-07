const { Livro, Editora, Genero, Linguagem, Autor } = require('../app/models');

module.exports = {
    async store(req, res) {
        const { autor, ...data } = req.body;

        const livro = await Livro.create(data);

        // if (autor && autor.length > 0) {
        livro.setAutores(autor);
        // }        

        return res.json(livro);
    },

    async getAll(req, res) {
        const livros = await Livro.findAll(
            {
            subQuery: false,
            include: [
                {
                    model: Editora,
                    as: 'editora'
                },
                {
                    model: Linguagem,
                    as: 'linguagem'
                },
                {
                    model: Genero,
                    as: 'genero'
                },
            ],
        }
        );

        return res.json(livros);
    },

    async getById(req, res) {
        const { id } = req.params;

        const livro = await Livro.findAll({
            where: {
                id: id,
            },
            include: [
                {
                    model: Editora,
                    as: 'editora'
                },
                {
                    model: Linguagem,
                    as: 'linguagem'
                },
                {
                    model: Genero,
                    as: 'genero'
                },
            ],
        });

        return res.json(livro);
    },

    async edit(req, res) {
        const { id } = req.params;

        const livro = await Livro.update(
            req.body,
            {
                where: {
                    id: id,
                }
            }
        ).then(() => {
            res.status(200).json(livro)
        }).catch((err) => {
            res.status(500).json({ err })
        })
    },

    async delete(req, res) {
        const { id } = req.params;

        await Livro.destroy({
            where: {
                id: id,
            }
        }).then(() => {
            res.status(200).json({ status: "Ok" })
        }).catch((err) => {
            res.status(500).json({ err })
        })
    }
};