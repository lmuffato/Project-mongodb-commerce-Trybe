db.produtos.updateMany(
  {},
  { $set: {
    criadoPor: "Ronald McDonald",
  } },
);
db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });

// // Crie uma query que adicione o campo criadoPor em todos os 
// documentos, colocando "Ronald McDonald" no valor desse campo.

// // Crie uma query que retorne o nome e criadoPor de todos os 
// produtos.
