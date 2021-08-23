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

db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: {
    ingredientes: 1,
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
