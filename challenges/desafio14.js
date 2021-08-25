/* Desafio 14 - Adicione o elemento contém sódio ao final do array tags nos
produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
Para isso, escreva no arquivo desafio14.js duas queries, nesta ordem: */

/* 1. Crie uma query que faça a adição do elemento contém sódio ao final do
array tags nos produtos em que o percentual de sódio seja maior do que 20
e menor do que 40. */
db.produtos.updateMany(
  {
    valoresNutricionais: { $elemMatch: {
      tipo: "sódio",
      percentual: { $gt: 20, $lt: 40 } } },
  },
  { $push: { tags: "contém sódio" } },
  );

/* 2. Crie uma query que retorne o nome e tags de todos os documentos. */
db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);
