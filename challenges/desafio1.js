/* 1 - Inclua o campo criadoPor em todos os documentos,
colocando "Ronald McDonald" no valor desse campo. */
db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, criadoPor: 1 },
);
