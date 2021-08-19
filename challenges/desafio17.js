// info do default_lang tirada do seguinte link:
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
  );

db.produtos.find(
  {
    $text: { $search: "frango hamburguer" },
  },
).count();