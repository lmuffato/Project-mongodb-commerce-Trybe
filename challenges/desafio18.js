db.produtos.createIndex({ descricao: "text" });

db.produtos.count({ $text: { $search: "feito com" } });
