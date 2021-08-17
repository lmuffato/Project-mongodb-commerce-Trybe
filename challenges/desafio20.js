// 20 - Remova o campo curtidas do item Big Mac.
db.produtos.update({ nome: "Big Mac" }, {
  $unset: { curtidas: "" },
});
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });

// Source:
// https://docs.mongodb.com/manual/reference/operator/update/unset/
