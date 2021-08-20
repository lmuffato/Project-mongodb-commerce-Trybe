// 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// use("commerce");
db.produtos.updateOne( // 1
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } },
);
db.produtos.find( // 2
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);
