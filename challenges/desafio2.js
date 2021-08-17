// Consultada a solução do Vinicius Franca Turma 10-A para encontrar o filtro do $exists
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });
