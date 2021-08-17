/**
 * Consultei o repositório do Felipe Pimentel para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-commerce/tree/felipe-pimentel-mongodb-commerce
 */
db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });