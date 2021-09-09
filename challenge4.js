db.produtos.updateOne(
    { nome: "Big Mac" },
    { $currentDate: { ultimaModificacao: 1 } },
);

db.produtos.find(
    { ultimaModificacao: { $exists: 1 } },
    { _id: 0, nome: 1 },
);