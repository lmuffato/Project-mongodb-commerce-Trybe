const queryAll = {};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  valoresNutricionais: 1, 
  _id: 0,
};

db.produtos.updateOne(
  queryAll,
  { $push: {
    valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 },
    },
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
