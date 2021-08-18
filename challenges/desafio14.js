db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $in: [21, 39] } } } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find(
  { },
  { nome: 1, tags: 1, _id: 0 },
);