db.produtos.updateMany(
  { nome: { $exists: true } },
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
