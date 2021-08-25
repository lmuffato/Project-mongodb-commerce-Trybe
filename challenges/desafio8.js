/* Desafio 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.
Para isso, escreva no arquivo desafio8.js duas queries, nesta ordem: */

/* 1. Crie uma query que faça a remoção do primeiro ingrediente no sanduíche
Quarteirão com Queijo. */
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
  );

/* 2. Crie uma query que retorne o nome e ingredientes de todos os documentos. */
db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
