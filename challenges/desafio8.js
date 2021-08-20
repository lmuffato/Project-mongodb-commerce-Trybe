// 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.
// use("commerce");
db.produtos.updateOne( // 1
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
