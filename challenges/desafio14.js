db.produtos.updateMany(
    { "valoresNutricionais.tipo": "sódio", "valoresNutricionais.percentual": { $gte: 40 } },
    { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { tags: 1, nome: 1, _id: 0 });