const collection = db.produtos;

collection.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

collection.find({}, { _id: 0, nome: 1, descricao: 1, descricaoSite: 1 });
