db.produtos.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);

db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: { $eq: "cebola" },
    },
  },
);