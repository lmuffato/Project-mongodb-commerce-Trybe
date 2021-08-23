const queryAll = {};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  ingredientes: 1, 
  _id: 0,
};

db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $push: {
    ingredientes: "bacon",
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
