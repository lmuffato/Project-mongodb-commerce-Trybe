db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } } } }, 
  { $push: { tags: "comtém sódio" } },
);
db.produtos.find({}, { nome: true, tags: true, _id: false });
