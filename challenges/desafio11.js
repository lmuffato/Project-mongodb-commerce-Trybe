// 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.
db.produtos.updateMany({},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } });

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
