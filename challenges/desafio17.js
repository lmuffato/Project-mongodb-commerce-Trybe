db.produtos.createIndex(
  {
    descricao: "text",
  },
  {
    defaultlanguage: "portuguese",
  },
);

db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer",
    },
  },
);
