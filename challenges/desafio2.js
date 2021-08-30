db.produtos.updateMany(
  { },
  { 
    $set: {
      valorUnitario: NumberDecimal("0.00"),
    },
  },
  { $upsert: 1 },
);

db.produtos.find(
  { },
  { nome: 1, valorUnitario: 1, _id: 0 },
);
