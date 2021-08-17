const collection = db.produtos;

collection.updateMany(
  {},
  { $push: {
    tags: {
      $each: ["combo", "tasty"],
      $sort: 1,
    },
  } },
);

collection.find({}, { _id: 0, nome: 1, tags: 1 });
