const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  avaliacao: 1, 
  _id: 0,
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

db.produtos.find({}, projectionFind);
