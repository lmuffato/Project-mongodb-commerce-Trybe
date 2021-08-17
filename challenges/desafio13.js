// 13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o
// percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany({ valoresNutricionais:
{ $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
{ $push: { tags: "muito sódio" } });
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

// Source: PR - https://github.com/tryber/sd-09-mongodb-commerce/pull/80/files
// Documentação: https://docs.mongodb.com/manual/reference/operator/query/elemMatch/
