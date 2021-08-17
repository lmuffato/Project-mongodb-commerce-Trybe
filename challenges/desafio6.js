// 6 - Inclua bacon no final da lista de ingredientes dos sanduíches
// Big Mac e Quarteirão com Queijo.
db.produtos.updateMany({ $or: [{ nome: { $eq: "Big Mac" } },
{ nome: { $eq: "Quarteirão com Queijo" } },
] }, { $push: { ingredientes: "bacon" } }, { upsert: true });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 }).pretty();
