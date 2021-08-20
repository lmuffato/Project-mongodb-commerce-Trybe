// 6 - Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
// use("commerce");
db.produtos.updateMany( // 1
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] }},
  { $push: { ingredientes: "bacon" }}
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1}
);
