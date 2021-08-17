db.produtos.updateMany({ nome: { $not: { $eq: "McChicken" } } }, 
{ $addToSet: { ingredientes: "ketchup" } });
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });
