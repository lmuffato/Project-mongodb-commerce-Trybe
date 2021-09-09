db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: {
          $lt: 40,
          $gt: 20,
        },
      },
    },
  },
  {
    $addToSet: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);