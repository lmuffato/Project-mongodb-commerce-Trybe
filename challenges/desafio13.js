db.produtos.updateMany({
  "valoresNutricionais.tipo": "sódio",
  "valoresNutricionais.percentual": { $gte: 40 },
  tags: { $exists: true },
}, {
  $push: {
    tags: "muito sódio",
  },
}, {
  upsert: false,
});
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
