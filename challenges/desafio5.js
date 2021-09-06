db.produtos.updateMany({ $and: [{ nome: { $ne: "McChicken" } }, 
{ "ingredientes.ketchup": { $exists: false } }] },
{ $push: { ingredientes: "ketchup" } });
db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 });