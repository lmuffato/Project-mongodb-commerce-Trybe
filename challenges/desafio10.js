db.produtos.updateMany(
  {},
  { $set: { "vendasPorDia": [0, 0, 0, 0, 0, 0, 0] } },
);
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $inc: { "avaliacao.3": 60 } },
);
db.produtos.updateMany(
  { tags: { $inc: ["bovino", "pão"] } },
  { $inc: { "avaliacao.6": 120 } },
);
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });