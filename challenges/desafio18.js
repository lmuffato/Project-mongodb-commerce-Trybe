/**
 * Consultei o repositório do Felipe Pimentel para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-commerce/tree/felipe-pimentel-mongodb-commerce
 */
db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.count({ $text: { $search: "\"feito com\"" } });