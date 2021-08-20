// 16 - Conte quantos produtos têm 4 ingredientes.
// use("commerce");
db.produtos.find(
  { 
    ingredientes: { $size: 4 },
  },
).count();
