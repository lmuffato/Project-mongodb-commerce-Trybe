// forma de construir códigos usando tipo de dados encontrado no link:
// https://docs.huihoo.com/mongodb/3.4/core/shell-types/index.html

// use("commerce")
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: {
    valorUnitario: NumberDecimal("0.00"),
  } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, valorUnitario: 1 },
);
