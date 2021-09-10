// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de
// sódio seja maior ou igual a 40.
// Utilizei o código do Alan Albuquerque para aplicar a lógica do $elemMatch
// https://github.com/tryber/sd-010-a-mongodb-commerce/pull/132/files
db.produtos.updateMany(
    { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
    { $push: {
        tags: {
            $each: ["muito sódio"],
            }, 
        },
    },
);
// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });