// 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
db.produtos.updateOne(
  { nome: "Big Mac" }, { $currentDate: { ultimaModificacao: { $type: "date" } } },
  );

db.produtos.find({}, { _id: 0, nome: 1, ultimaModificacao: 1 });
