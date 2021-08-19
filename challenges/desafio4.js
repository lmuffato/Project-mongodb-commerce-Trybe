db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $set: {
      ultimaModificacao: new Date(),
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, ultimaModificacao: 1 });
