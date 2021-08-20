db.produtos.updateMany({
  $and: [
    { "valoresNutricionais.2.tipo": "sódio" },
    { "valoresNutricionais.2.percentual": { $lt: 40 } },
    { "valoresNutricionais.2.percentual": { $gt: 20 } },
  ],
}, {
  $push: {
    tags: "contém sódio",
  },
});

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });