const queryAll = {};

const tagsBovino = {
  "tags.0": "bovino",
};

const increBovino = {
  $inc: {
    avaliacao: 5,
  },
};

const tagsAve = {
  "tags.0": "ave",
};

const increAve = {
  $inc: {
    avaliacao: 3,
  },
};

const updateAvaliacao = {
  $set: {
    avaliacao: 0,
  },
};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1,
  avaliação: 1,
  _id: 0,
};

// 1. Inserção campos avaliacao
db.produtos.update(
  queryAll,
  updateAvaliacao,
  params,
);

// 2. Incrementado avaliação sanduíche tipo bovino
db.produtos.update(
  tagsBovino,
  increBovino,
  params,
);

// 3. Incrementando avaliação sanduícke tipo Ave
db.produtos.update(
  tagsAve,
  increAve,
  params,
);

// 4. Retorno dos campos pedidos
db.produtos.find(queryAll, projectionFind);
