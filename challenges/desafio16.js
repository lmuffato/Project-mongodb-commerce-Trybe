// 16 - Conte quantos produtos têm 4 ingredientes.
db.produtos.find({ ingredientes: { $size: 4 } }).count();

// Documentação: https://docs.mongodb.com/manual/reference/operator/query/size/#mongodb-query-op.-size
