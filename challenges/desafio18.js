// 18 - Conte quantos documentos contêm a expressão "feito com" utilizando o operador $text.
db.produtos.createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
);

db.produtos.count(
    { $text: { $search: "\"feito com\"" } },
);
