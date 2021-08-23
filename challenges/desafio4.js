const projectionFind = {
  _id: 0,
  nome: 1,
};

db.produtos.findOneAndUpdate(
  { nome: "Big Mac" },
  { $currentDate: {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  projectionFind,
);
