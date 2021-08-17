// 17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.
db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.find({ $text: { $search: "frango hamburguer", $caseSensitive: false } }).count();

// Source:
// https://docs.mongodb.com/manual/reference/operator/query/text/#std-label-text-query-operator-behavior
// https://docs.mongodb.com/manual/core/index-text/
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
