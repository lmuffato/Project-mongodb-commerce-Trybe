db.produtos.updateMany(
  { },
  { 
    $set: {
      criadoPor: "Ronald McDonald",
    },
  },
  { $upsert: 1 },
);

db.produtos.find(
  { },
  { nome: 1, criadoPor: 1, _id: 0 },
);
