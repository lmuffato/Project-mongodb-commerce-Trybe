const collection = db.produtos;

collection.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

collection.find({}, { _id: 0, nome: 1, ingredientes: 1 });
