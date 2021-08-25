/* Desafio 4 - Atribua a data corrente ao campo ultimaModificacao no
sanduíche Big Mac. Para isso, escreva no arquivo desafio4.js duas
queries, nesta ordem: */
// use commerce;

/* 1. Crie uma query que atribua a data corrente ao campo ultimaModificacao no
sanduíche Big Mac. Para a data corrente faça uso do tipo Date. */
db.produtos.updateMany(
  { nome: "Big Mac",
    ultimaModificacao: { $exists: false } },
  { $set: { ultimaModificacao: new Date() } },
);

/* 2. Crie uma query que retorne o nome de todos os documentos em que o campo
ultimaModificacao existe. */
db.produtos.find({ ultimaModificacao: { $exists: true } },
  { _id: false, nome: true });
