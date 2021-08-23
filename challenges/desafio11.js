const queryAll = {};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  tags: 1, 
  _id: 0,
};

db.produtos.updateMany(
  {},
  { $push: {
    tags: {
      $each: ["combo", "tasty"],
      $sort: 1 },
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
