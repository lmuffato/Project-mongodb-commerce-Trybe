const params = {
  upsert: true,
  multi: true,
};

db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
  params,
);

db.produtos.updateMany(
  { "tags.0": { $eq: "bovino" } },
  { $inc: { avaliacao: 5 } },
  params,
);

db.produtos.updateMany(
  { "tags.0": { $eq: "ave" } },
  { $inc: { avaliacao: 3 } },
  params,
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
