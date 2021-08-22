const query = {};

const projectionFind = {
  nome: 1, criadoPor: 1, _id: 0,
};

const params = {
  upsert: false,
  multi: true,
};

db.produtos.update(
  query,
  { $set: { criadoPor: "Ronald McDonald" } },
  params,
);

db.produtos.find(query, projectionFind);
