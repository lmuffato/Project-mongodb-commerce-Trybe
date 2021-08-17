const collection = db.produtos;

collection.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
);

collection.find({}, { _id: 0, nome: 1, ingredientes: 1 });
