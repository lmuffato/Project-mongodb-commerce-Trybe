// 14 - Adicione o elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio",
  percentual: { $gt: 20, $lt: 40 } } } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find({ }, { nome: 1, tags: 1, _id: 0 });
