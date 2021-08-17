db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.find(
  {
    $text: {
      $search: "frango hambúrguer",
      $language: "portuguese",
      $caseSensitive: false,
    },
  },
).count();
