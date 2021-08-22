const query = {};

const update = {
  $set: {
    criadoPor: "Ronald McDonald" },
  };

const projectionFind = {
  nome: 1, criadoPor: 1, _id: 0,
};

const params = {
  upsert: false,
  multi: true,
};

// Inserção do campo
db.produtos.update(
  query,
  update,
  params,
);

// Query
db.produtos.find(query, projectionFind);
