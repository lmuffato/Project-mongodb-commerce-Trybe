db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({}, { nome: true, criadoPor: true, _id: false });