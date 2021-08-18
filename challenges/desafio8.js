db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, ingredientes: 1 },
);
