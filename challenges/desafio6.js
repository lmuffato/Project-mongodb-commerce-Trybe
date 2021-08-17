db.produtos.updateMany(
  { nome: { $in: ["Bic Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
