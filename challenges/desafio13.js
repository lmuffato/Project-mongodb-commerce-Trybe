db.produtos.updateMany(
    { "valoresNutricionais.tipo": "sódio", "valoresNutricionais.percentual": { $gte: 40 } },
    { $push: {
        tags: "muito sódio",
      },
    },
    { upsert: true },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
