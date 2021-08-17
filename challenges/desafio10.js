// Query 1
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

// Query 2
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });

// Query 3
db.produtos.updateMany(
  { $and: [{ tags: "bovino" }, { tags: "pão" }] },
  { $inc: { "vendasPorDia.6": 120 } },
);

// Quer 4
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });