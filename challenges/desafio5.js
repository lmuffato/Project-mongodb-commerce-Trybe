db.produtos.updateMany({ nome: { $ne: "McChicken" } },
{ $addToSet: { ingredientes: "ketchup" } });
db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 });