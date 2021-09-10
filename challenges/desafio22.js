db.produtos.find(
  {
    $expr: {
      $not: {
        $mod: ["$vendidos", 5],
      },
    },
  },
  {
    nome: 1,
    vendidos: 1,
    _id: 0,
  },
);
