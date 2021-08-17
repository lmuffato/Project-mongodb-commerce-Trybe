db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      $and: [
        { percentual: { $gt: 20 } },
        { percentual: { $lt: 40 } },
      ],
    },
  },
}, {
  $push: {
    tags: "contém sódio",
  },
}, {
  upsert: false,
});
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
