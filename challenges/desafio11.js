// use ("commerce");
// db.produtos.find();

db.produtos.updateMany(
  {},
  { $push: { tags: {
    $each: ["combo", "tasty"],
    $sort: 1,
    },
  } },
  // {upsert: true}
  // { collation: {locale:"pt"}}
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
);
