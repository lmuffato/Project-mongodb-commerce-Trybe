db.produtos.updateMany(
  {},
  {
    $push:
    {
      valoresNutricionais:
      {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);