db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: { percentual: { $gt: 40 }, tipo: "sódio" },
    },
  }, { $push: { tags: "muito sódio" } },
  );

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });