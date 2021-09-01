db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.find({}, { _id: 0, criadoPor: 1, nome: 1 });
