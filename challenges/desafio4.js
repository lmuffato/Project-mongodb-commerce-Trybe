// Crie uma query que atribua a data corrente ao campo ultimaModificacao
// o sanduíche Big Mac. Para a data corrente faça uso do tipo Date.

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
);

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.find({ ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 });
