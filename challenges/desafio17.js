db.produtos.createIndex({ ingredientes: "text" });

db.produtos.count({ $text: { $search: "frango hamburguer" } });
