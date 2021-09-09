db.produtos.updateMany({ $nor: [{ ingredientes: "ketchup" },
  { nome: "McChicken" }] },
  { $push: { ingredientes: "ketchup" } });

db.produtos.find({},
  { _id: 0, nome: 1, ingredientes: 1 });
