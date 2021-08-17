db.produtos.updateOne({}, { $set: { ultimaModificacao: new Date() } });
db.produtos.find(
  { ultimaModificacao: { $existes: true } }, { avaliacao: true, nome: true, _id: false },
);
