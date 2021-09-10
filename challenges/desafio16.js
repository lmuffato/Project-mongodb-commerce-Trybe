// Conte quantos produtos têm 4 ingredientes
// Consultei o comando no projeto do colega Alan Albuquerque
db.produtos.count({ ingredientes: { $size: 4 } });