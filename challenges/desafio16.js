db.produtos.count(
  {
    ingredientes: {
      $size: 4,
    },
  },
);

db.produtos.find(queryAll, projectionFind);
