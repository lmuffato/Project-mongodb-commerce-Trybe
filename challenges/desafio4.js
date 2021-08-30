db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
  { upsert: 1 },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);
