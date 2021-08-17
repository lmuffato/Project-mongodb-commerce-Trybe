db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } });
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });