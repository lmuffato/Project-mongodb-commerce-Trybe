db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "ketchup" } });
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
