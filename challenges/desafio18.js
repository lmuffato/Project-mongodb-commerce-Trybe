// 18 - Conte quantos documentos contêm a expressão feito com utilizando o operador $text.

// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/

db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.countDocuments({ $text: { $search: "\"feito com\"" } });
