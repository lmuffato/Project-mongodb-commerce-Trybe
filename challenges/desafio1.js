/* Desafio 1 - Inclua o campo criadoPor em todos os documentos, colocando
"Ronald McDonald" no valor desse campo.
Para isso, escreva no arquivo desafio1.js duas queries, nesta ordem: */

// use commerce;

/* 1. Crie uma query que adicione o campo criadoPor em todos os documentos,
colocando "Ronald McDonald" no valor desse campo. */
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

/* 2. Crie uma query que retorne o nome e criadoPor de todos os produtos. */
db.produtos.find({}, { _id: false, nome: true, criadoPor: true });
