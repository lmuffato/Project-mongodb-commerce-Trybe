const query = {};

const update = {
  $set: { 
    valorUnitario: NumberDecimal("0.00"),
  },
};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  valorUnitario: 1, 
  _id: 0,
};

db.produtos.update(
  query,
  update,
  params,
);

db.produtos.find(query, projectionFind);
