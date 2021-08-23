db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find(
  {}, 
  { nome: 1, valorUnitario: 1, _id: 0 },
);

/* Como indicar tipo NumberDecimal: https://docs.mongodb.com/manual/core/shell-types/ */