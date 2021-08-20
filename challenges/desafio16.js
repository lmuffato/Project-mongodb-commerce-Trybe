use("commerce");
// db.produtos.find();

db.produtos.find(
  { ingredientes: { $size: 4 } },
).count();
