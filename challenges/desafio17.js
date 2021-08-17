db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });

db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
