/* Desafio 5 - Adicione ketchup aos ingredientes para todos os sanduíches
menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem: /*

/* 1. Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches
menos o McChicken, garantindo que não haja duplicidade nos ingredientes. */
db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

/* 2. Crie uma query que retorne o nome e ingredientes de todos os documentos. */
db.produtos.find(
  { },
  { nome: true, ingredientes: true, _id: false },
);
