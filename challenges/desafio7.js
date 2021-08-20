// 7 - Remova o item cebola de todos os sanduíches.
// use("commerce");
db.produtos.updateMany(
  {},
  { 
    $pull: {
      ingredientes: "cebola",
    },
  },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
