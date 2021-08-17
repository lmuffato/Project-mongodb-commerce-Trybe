db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });
db.produtos.count({ $text: { $search: "frango hamburguer" } }, { nome: 1, _id: 0 });