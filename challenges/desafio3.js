db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
  { upsert: true, multi: true },
);

db.produtos.updateMany(
  { "tags.0": { $eq: "bovino" } },
  { $inc: { avaliacao: 5 } },
  { upsert: true, multi: true },
);

db.produtos.updateMany(
  { tags: { $eq: "ave" } },
  { $inc: { avaliacao: 3 } },
  { upsert: true, multi: true },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });