db.produtos.createIndex(
  { descricao: "text" },
  {
    // https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
    // Consultada a solução de Wanderson Sales - Turma 10-A
    default_language: "portuguese",
  },
);

db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer",
    },
  },
);
