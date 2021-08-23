db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);

/* Como ordenar os elementos da tag em ordem alfabética:
https://docs.mongodb.com/manual/reference/operator/update/sort/ */