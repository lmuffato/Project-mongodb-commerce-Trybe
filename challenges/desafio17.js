db.produtos.createIndex({ ingredientes: "text" });

db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
