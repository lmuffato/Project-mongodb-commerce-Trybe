db.produtos
.updateMany({ nome: { $ne: "McChicken" } },
 { $push: { ingredientes: "ketchup" } }, { upsert: true });
 db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
