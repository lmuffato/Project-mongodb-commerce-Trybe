db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({}, { nome: 1, _id: 0, criadoPor: 1 });
