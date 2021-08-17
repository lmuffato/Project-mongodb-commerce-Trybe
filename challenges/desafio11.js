// // 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
// Crie uma query que faça tanto a inserção dos elementos combo e tasty no array tags de todos os sanduíches quanto a ordenação dos elementos de tags em ordem alfabética ascendente.

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.updateMany({ tags: { $all: ["bovino", "pão"] } }, {
  $inc: { "vendasPorDia.6": 120 },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  vendasPorDia: 1,
});
