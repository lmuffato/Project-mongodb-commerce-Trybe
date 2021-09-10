// Crie uma query que faça a adição do elemento contém sódio ao final do array tags nos produtos 
// em que o percentual de sódio seja maior do que 20 e menor do que 40.
db.produtos.updateMany({
    $and: [
        { "valoresNutricionais.percentual": { $gt: 20 } },
        { "valoresNutricionais.percentual": { $lt: 40 } },
    ],
},
    { $push: {
        tags: {
            $each: ["sódio"],
            }, 
        },
    });
// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });