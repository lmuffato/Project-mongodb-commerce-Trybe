db.produtos.createIndex(
  { descricao: "text" },
  {default_leguage: "portuguese" },
);

db.produtos.count({ $text: { $search: "\"feito com\"" } });