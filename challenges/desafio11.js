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

db.produtos.updateOne(
  {},
  { $addToSet: {
    tags: {
      $each: ["combo", "tasty"],
    },
  } },
  params,
).sort({ tags: -1 });

db.produtos.find(queryAll, projectionFind);
