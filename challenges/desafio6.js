db.produtos.updateMany(
  { nome: { $in: ["Bic Mac", "Quarteirão com Queijo"] } },
  { $push: { ingredientes: "bacon" } },
);
db.produtos.fing({}, { _id: 0, nome: 1, ingredientes: 1 });