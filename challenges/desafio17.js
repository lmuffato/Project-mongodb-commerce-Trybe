// challenge 17;

db.produtos.createIndex({ descricao: "text" });

db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
