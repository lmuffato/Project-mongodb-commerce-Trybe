db.produtos.updateMany(
  { nome: { $exists: true } },
    { $pull: { ingredientes: "cebola" }, 
  },
);

db.produtos.find(
  {}, { _id: 0, nome: 1, ingredientes: 1 },
);