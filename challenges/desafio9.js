// 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.
// use("commerce");
db.produtos.updateOne( // 1
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
);
db.produtos.find( // 2
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
