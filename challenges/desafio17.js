db.produtos.createIndex(
  { descricao: "text" },
  { default_leguage: "portuguese" },
);

db.produtos.count({ $text: { $search: "frango hamburger" } });
