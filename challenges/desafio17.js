// código para definir idioma padrão encontrada no link:
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/

// use("commerce")
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.count({
  $text: {
    $search: "frango hamburguer",
  },
});
