// use("commerce")
db.produtos.count(
  { nome: {
    $regex: /Mc/i,
  } },
);
