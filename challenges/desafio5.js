// use("commerce")
db.produtos.updateMany(
  { nome: { $: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
