// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
db.produtos.count({ $text: { $search: "frango hamburguer" } });
