// use("commerce")
db.produtos.count(
  { ingredientes: {
    $size: 4,
  } },
);
