const collection = db.produtos;

collection.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

collection.updateMany(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

collection.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

collection.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
