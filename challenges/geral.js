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