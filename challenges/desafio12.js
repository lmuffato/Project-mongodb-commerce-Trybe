const collection = db.produtos;

collection.updateMany(
  {},
  { $push: {
    valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 },
    } },
  },
);

collection.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
