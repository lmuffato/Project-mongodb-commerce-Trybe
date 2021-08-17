db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.updateMany(
  {},
  { $set: { valorUnitario: NumberDecimal("0.00") } },
  { upsert: true },
);

db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
  { upsert: true },
);
db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "bovino" } } },
  { $inc: { avaliacao: 5 } },
);
db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "ave" } } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.updateMany({
  nome: "Big Mac",
}, {
    $currentDate: {
      ultimaModificacao: {
        $type: "date",
      },
    },
}, {
  upsert: true,
});

db.produtos.updateMany({
  nome: { $ne: "McChicken" },
}, {
  $addToSet: { ingredientes: "ketchup" },
});

db.produtos.updateMany({
  $or: [
    { nome: { $eq: "Big Mac" } },
    { nome: { $eq: "Quarteirão com Queijo" } },
],
}, {
  $addToSet: { ingredientes: "bacon" },
});

db.produtos.updateMany({}, {
  $pull: { ingredientes: "cebola" },
});

db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, {
  $pop: { ingredientes: -1 },
});

db.produtos.updateOne({ nome: "Cheddar McMelt" }, {
  $pop: { ingredientes: 1 },
});

db.produtos.updateMany({}, {
  $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
});

db.produtos.updateMany({ nome: "Big Mac" }, {
  $inc: { "vendasPorDia.3": 60 },
});

db.produtos.updateMany({ tags: { $all: ["bovino", "pão"] } }, {
  $inc: { "vendasPorDia.6": 120 },
});

db.produtos.updateMany({}, {
  $push: { tags: { $each: ["combo", "tasty"],
  $sort: 1,
} },
},
{ upsert: true,
});

db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: {
        $eq: "sódio",
      },
      percentual: {
        $gte: 40,
      },
    },
  },
}, {
  $push: {
    tags: "muito sódio",
  },
});

db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: {
        $eq: "sódio",
      },
      percentual: {
        $gt: 20,
        $lt: 40,
      },
    },
  },
}, {
  $push: {
    tags: "contém sódio",
  },
});