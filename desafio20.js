db.produtos.updateOne(
    { nome: "Big Mac" },
    { $unset: { curtidas: "" } },
);

db.produtos.find({}, { _id: 0, name: 1, curtidas: 1 });