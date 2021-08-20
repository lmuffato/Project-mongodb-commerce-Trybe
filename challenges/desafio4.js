db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find({ ultimaModificacao: { $exists: 1 } });
