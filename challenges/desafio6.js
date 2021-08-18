// challenge 6;

db.produtos.updateMany(
  {
    $or: [
      { nome: { $eq: "Big Mac" } },
      { nome: { $eq: "Quarteirão com Queijo" } },
    ],
  },
  { $push: { ingredientes: "bacon" } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
