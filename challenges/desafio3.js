const prodCollection = db.produtos;

function incRatingInSandwich(type, incValue) {
  prodCollection.updateMany(
    { tags: { $in: [type] } },
    { $inc: { avaliacao: incValue } },
  );
}

prodCollection.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

incRatingInSandwich("bovino", 5);

incRatingInSandwich("ave", 3);

prodCollection.find(
  {},
  { _id: 0, nome: 1, avaliacao: 1 },
);
