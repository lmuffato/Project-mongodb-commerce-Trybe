db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

db.commerce.find({ }, { nome: 1, criadoPor: 1 });
