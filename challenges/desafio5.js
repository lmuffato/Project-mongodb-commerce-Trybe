const collection = db.produtos;

collection.updateMany(
  { nome: { $not: /McChicken/ } },
  { $addToSet: { ingredientes: "ketchup" } },
);

collection.find({}, { _id: 0, nome: 1, ingredientes: 1 });
