const collection = db.produtos;

collection.createIndex({ descricao: "text" }, { default_language: "portuguese" });

collection.count({ $text: { $search: "\"feito com\"" } });
