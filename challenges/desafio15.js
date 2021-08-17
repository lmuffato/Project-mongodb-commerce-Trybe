db.produtos.find(
  { nome: { $regex: /mc/gi } },
).count();