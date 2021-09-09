db.produtos.updateMany(
    { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 20, $lte: 40 } } } },
    { $push: { tags: { $each: ["contém sódio"] } } },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });