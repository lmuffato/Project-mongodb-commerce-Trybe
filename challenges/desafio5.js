// 5 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
// use("commerce");
db.produtos.updateMany( // 1
  { nome: { $ne: "McChicken" }},
  { $addToSet: { ingredientes: "ketchup"} }
);
db.produtos.find( // 2
  {},
  { _id: 0, nome: 1, ingredientes: 1 }
);
