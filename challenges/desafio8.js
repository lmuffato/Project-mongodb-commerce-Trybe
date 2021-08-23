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

db.produtos.findOneAndUpdate(
  { nome: "Quarteirão com Queijo" },
  { $pop: {
    ingredientes: -1,
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
