db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: 0 } });

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });
