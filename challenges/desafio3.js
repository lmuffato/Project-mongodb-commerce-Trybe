const queryAll = {};

const queryBovino = {
  "tags.0": { $eq: "bovino" },
};

const increBovino = {
  $inc: {
    avaliacao: 5,
  },
};

const queryAve = {
  "tags.0": { $eq: "ave" },
};

const increAve = {
  $inc: {
    avaliacao: 3,
  },
};

const updateAvaliacao = {
  $set: {
    avaliacao: NumberInt("0"),
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
db.produtos.updateMany(
  queryAll,
  updateAvaliacao,
  params,
);

// 2. Incrementado avaliação sanduíche tipo bovino
db.produtos.updateMany(
  queryBovino,
  increBovino,
  params,
);

// 3. Incrementando avaliação sanduícke tipo Ave
db.produtos.updateMany(
  queryAve,
  increAve,
  params,
);

// 4. Retorno dos campos pedidos
db.produtos.find(queryAll, projectionFind);
