db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find(
  { criadoPor: "Ronald McDonald" },
  {
    criadoPor: 1,
    nome: 1,
    _id: 0,
  },
);
