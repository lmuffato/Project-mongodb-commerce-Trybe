db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.update({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.update({ $and: [
  { tags: { $in: ["bovino"] } },
  { tags: { $in: ["pão"] } }] }, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
