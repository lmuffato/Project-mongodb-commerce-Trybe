db.produtos.updateOne({}, { $unset: { curtidas: "" } });
db.produtos.find({}, { nome: true, curtidas: true, _id: false });
