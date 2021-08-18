db.produtos.updateMany(
    { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
    { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { tags: 1, nome: 1, _id: 0 });
