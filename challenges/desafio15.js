// 15 - Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.
db.produtos.find({ nome: { $regex: /Mc/i } }).count();

// Source: https://stackoverflow.com/questions/5798098/how-to-make-like-query-work-in-mongodb
// Documentação: https://docs.mongodb.com/manual/reference/operator/query/regex/#mongodb-query-op.-regex
