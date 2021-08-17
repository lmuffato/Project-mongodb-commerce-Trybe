// challenge 1;

db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });
