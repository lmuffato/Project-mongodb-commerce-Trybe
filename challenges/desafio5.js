db.produtos.updateMany({ ingredientes: { $nin: ["ketchup"] }, nome: { $nin: ["McChicken"] } },
{ $push: { ingredientes: "ketchup" } });
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 }).pretty();