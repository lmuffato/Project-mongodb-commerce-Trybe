db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: { $eq: "sódio" }, percentual: { $gte: 40 },
      },
    },
  },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);

/* Como verificar 2 condições do mesmo array:
https://stackoverflow.com/questions/30013149/mongodb-query-nested-array-by-more-than-one-condition */