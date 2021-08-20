// 3 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.
// use("commerce");
db.produtos.updateMany( // 1
  {},
  { $set: { avaliacao: NumberInt("0") }}
);
db.produtos.updateMany( // 2
  { tags: "bovino" },
  { $set: { avaliacao: NumberInt("5") }}
);
db.produtos.updateMany( // 3
  { tags: "ave" },
  { $set: { avaliacao: NumberInt("3") }}
);
db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
