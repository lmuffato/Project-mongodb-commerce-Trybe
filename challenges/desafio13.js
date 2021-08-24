const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  tags: 1, 
  _id: 0,
};

db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  { $push: { tags: "muito sódio" } },
  params,
);

db.produtos.find(queryAll, projectionFind);
