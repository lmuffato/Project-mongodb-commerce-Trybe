db.produtos.updateMany(
  { $and: [
    { "valoresNutricionais.tipo": { $eq: "sódio" } },
    { "valoresNutricionais.percentual": { $gte: 40 } },
  ] },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);
