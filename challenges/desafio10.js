const queryAll = {};

const params = {
  upsert: true,
  multi: true,
};

const projectionFind = {
  nome: 1, 
  vendasPorDia: 1, 
  _id: 0,
};

db.produtos.updateMany(
  {},
  { $set: {
    vendasPorDia: {
      $each: [0, 0, 0, 0, 0, 0, 0],
    },
  } },
  params,
);

db.produtos.findOneAndUpdate(
  { nome: "Big Mac" },
  { $inc: {
    "vendasPorDia.3": 60,
  } },
  params,
);

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pao"] } },
  { $inc: { 
    "vendasPorDia.6": 120,
  } },
  params,
);

db.produtos.find(queryAll, projectionFind);
