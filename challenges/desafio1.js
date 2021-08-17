// 1 - Inclua o campo criadoPor em todos os documentos, colocando "Ronald McDonald"
// no valor desse campo.
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({ criadoPor: "Ronald McDonald" }, {
  criadoPor: 1, nome: 1, _id: 0,
});