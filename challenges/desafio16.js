// 16 - Conte quantos produtos têm 4 ingredientes.
db.produtos.find({ ingredientes: { $size: 4 } }).count();
