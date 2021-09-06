db.produtos.updateMany({ $or: [{ nome: "Big Mac" }, 
{ nome: "Quarteirão com Queijo" }] },
{ $push: { ingredientes: "bacon" } });
db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 });