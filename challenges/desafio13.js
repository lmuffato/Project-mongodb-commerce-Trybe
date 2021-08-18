// Crie uma query que faça em todos os documentos
// a ordenação dos elementos do array valoresNutricionais pelo
// campo percentual de forma descendente. Dica: mesmo sem adicionar
// nenhum novo elemento, para essa operação é necessário utilizar
// também o modificador $each.
db.produtos.updateMany(
  { valoresNutricionais:
    { $elemMatch: {
          tipo: "sódio",
          percentual: {
          $gte: 40,
        },
      },
    },
  },
  { $push: { tags: "muito sódio" } },
);

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 }); 