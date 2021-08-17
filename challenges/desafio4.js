db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new Date() } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { _id: 0, nome: 1 },
);

// 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para isso, escreva no arquivo desafio4.js duas queries, nesta ordem:

// Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac. Para a data corrente faça uso do tipo Date.

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
