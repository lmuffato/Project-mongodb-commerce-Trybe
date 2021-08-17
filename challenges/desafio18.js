db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });
db.produtos.count({ $text: { $search: "\"feito com \"" } }, { nome: 1, _id: 0 });