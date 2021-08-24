/* Desafio 2 - Inclua o campo valorUnitario em todos os documentos em que esse
campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
Para isso, escreva no arquivo desafio2.js duas queries, nesta ordem: */

// use commerce

/* 1. Crie uma query que adicione o campo valorUnitario em todos os documentos
em que esse campo não existe e atribua a ele o valor "0.00", com o
tipo NumberDecimal. */
// db.produtos.find({ valorUnitario: { $exists: false } });
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

/* 2. Crie uma query que retorne o nome e valorUnitario de todos os produtos. */
db.produtos.find({}, { _id: false, nome: true, valorUnitario: true });
