const projectionFind = {
  nome: 1, 
  ingredientes: 1, 
  _id: 0,
};

const params = {
  upsert: true,
  multi: true,
};

db.products.updateMany(
  { nome: { $ne: "McChiken" } },
  { $addToSet: { ingredientes: "ketchup" } },
  params,
);

db.produtos.find({}, projectionFind);
