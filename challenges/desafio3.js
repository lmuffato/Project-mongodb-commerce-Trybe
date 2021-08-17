const collection = db.produtos;

function incRatingInSandwich(type, incValue) {
  collection.updateMany(
    { tags: { $in: [type] } },
    { $inc: { avaliacao: incValue } },
  );
}

collection.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

incRatingInSandwich("bovino", 5);

incRatingInSandwich("ave", 3);

collection.find({}, { _id: 0, nome: 1, avaliacao: 1 });
