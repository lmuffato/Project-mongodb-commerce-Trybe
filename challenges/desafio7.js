b.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

b.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
