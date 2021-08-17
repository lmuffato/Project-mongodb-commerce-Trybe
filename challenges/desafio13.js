db.produtos.updateMany(
  { "valoresNutricionais.tipo.sódio": { $gte: 40 } },
  { $push: {
    tags: "muito sódio"
  } },
);
