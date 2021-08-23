db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateOne(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
);

/* Como indicar a posição de um array no MongoDb:
https://docs.mongodb.com/manual/core/document/#std-label-document-dot-notation */