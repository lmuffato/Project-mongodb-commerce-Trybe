// use ("commerce");
// db.produtos.find();

db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes } },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);
