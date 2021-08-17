// 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e
// aproveite para deixar os elementos em ordem alfabética ascendente.
db.produtos.updateMany({}, {
  $push: {
    tags: {
    $each: ["combo", "tasty"],
    $sort: 1,
  },
  },
});
db.produtos.find({}, { tags: 1, nome: 1, _id: 0 }).pretty();

// Source:
// https://docs.mongodb.com/manual/reference/operator/update/sort/#mongodb-update-up.-sort
