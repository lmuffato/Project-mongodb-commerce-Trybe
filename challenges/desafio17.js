db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });

// Referencia para utilizar o createIndex(): https://docs.mongodb.com/manual/reference/command/createIndexes/
