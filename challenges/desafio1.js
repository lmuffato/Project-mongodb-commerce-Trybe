db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.find(
  { $and: 
    [{ nome:
       { $exists: true } },
        { criadoPor: { $exists: true } }] },
         { _id: 0, criadoPor: 1, nome: 1 },
);
