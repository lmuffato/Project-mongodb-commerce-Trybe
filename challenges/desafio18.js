// challenge 18;

db.produtos.createIndex({ descricao: "text" });

db.produtos.find({ $text: { $search: "\"feito com\"" } }).count();
