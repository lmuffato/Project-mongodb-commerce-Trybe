// 18 - Conte quantos documentos contêm a expressão feito com utilizando o
// operador $text.

db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.find({ $text: { $search: "\"feito com\"", $caseSensitive: false } }).count();
