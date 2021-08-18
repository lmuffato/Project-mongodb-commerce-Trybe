const collection = db.produtos;

collection.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

collection.find({}, { _id: 0, nome: 1, curtidas: 1 });
