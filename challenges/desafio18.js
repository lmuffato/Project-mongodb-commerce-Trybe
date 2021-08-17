db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });

db.produtos.find({ $text: { $search: "feito com" } }).count();
