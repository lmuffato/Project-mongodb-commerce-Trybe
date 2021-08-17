// 5 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken,
// garantindo que não haja duplicidade nos ingredientes.
db.produtos.updateMany({ $and: [
{ nome: { $not: { $eq: "McChicken" } } },
{ ingredientes: { $not: { $in: ["ketchup"] } } },
],
},
{ $push: { ingredientes: "ketchup" } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
