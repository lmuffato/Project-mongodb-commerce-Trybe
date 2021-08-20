// use("commerce");
// db.produtos.find();

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.find(
  {
    $text: {
      $search: "\"feito com\"",
    },
  },
).count();
