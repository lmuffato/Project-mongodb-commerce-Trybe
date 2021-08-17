db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
// https://docs.mongodb.com/manual/reference/operator/query/text/#std-label-text-query-operator-behavior
db.produtos.countDocuments({ $text: { $search: "\"feito com\"" } });
