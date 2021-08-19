db.produtos.updateMany(
  { nome: { $exists: true } },
  { $set: { avaliacao: NumberInt("0") } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $set: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $all: ["ave"] } },
  { $set: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
