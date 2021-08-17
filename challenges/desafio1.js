db.produtos.updateMany({ }, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({ criadoPor: "Ronald McDonald" }, { nome: 1, criadoPor: 1, _id: 0 });
