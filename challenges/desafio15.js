db.produtos.count(
  {
    nome: {
      $regex: /Mc/i,
    },
  },
);

db.produtos.find(queryAll, projectionFind);
