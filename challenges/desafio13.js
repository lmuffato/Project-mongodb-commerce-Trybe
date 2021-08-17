db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: {
        $gte: 40,
      },
    },
  },
},
{
  $push: {
    tags: {
      $each: ["muito sodio"],
    },
  },
});

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
