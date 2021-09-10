// Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de
// sódio seja maior ou igual a 40.
db.produtos.updateMany(
    { "valoresNutricionais.percentual": { $gte: 40 } },
    { $push: {
        tags: {
            $each: ["muito sódio"],
            }, 
        },
    },
);
// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });