const collection = db.produtos;

collection.update(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
);

collection.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);
