db.produtos.updateMany(
    { "valoresNutricionais.tipo": "sódio", "valoresNutricionais.percentual": { $gt: 20, $lt: 40 } },
    { $push: { tags: "contém sódio" } },
);

db.produtos.find({}, { tags: 1, nome: 1, _id: 0 });