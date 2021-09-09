db.produtos.updateMany(
    { $ne: { name: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
  );
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
