db.produtos.updateMany(
  {
    ingredientes: { $nin: ["ketchup"] },
    nome: { $not: /McChicken/ },
  },
  { $push: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, ingredientes: 1 },
);
