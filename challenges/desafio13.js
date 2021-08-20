db.produtos.updateMany({
  $and: [
    { "valoresNutricionais.2.tipo": "sódio" },
    { "valoresNutricionais.2.percentual": { $gte: 40 } },
  ],
}, {
  $push: {
    tags: "muito sódio",
  },
});

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });