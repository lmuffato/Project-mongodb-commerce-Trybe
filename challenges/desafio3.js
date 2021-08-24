db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

db.produros.updateMany(
  { tag: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tag: { $all: ["ave"] } },
  { $inc: { avaliacao: 3 } },
);

db.produros.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
