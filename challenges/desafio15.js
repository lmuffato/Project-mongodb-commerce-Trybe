// use ("commerce");
// db.produtos.find();

db.produtos.find(
  { nome: { $regex: /Mc/ } },
).count();
