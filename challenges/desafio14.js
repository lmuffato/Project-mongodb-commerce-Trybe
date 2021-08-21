db.produtos.updateMany({ "valoresNutricionais.percentual": { $gt: 20, $lt: 40 } },
    { $push: { tags: "contém sódio" } });

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

// ### 14 - Adicione o elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

// Para isso, escreva no arquivo `desafio14.js` duas queries, **nesta ordem**:

// 1. Crie uma query que faça a adição do elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

// 2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.