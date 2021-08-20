// 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
// use("commerce");
db.produtos.updateMany( // 1
  { },
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);
db.produtos.find( // 2
  {},
  { _id: 0, nome: 1, tags: 1 },
);
