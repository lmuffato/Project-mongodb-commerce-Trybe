db.produtos.updateMany({}, { $mul: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: "bovino" }, { $inc: { avaliacao: 5 } });
db.produtos.updateMany({ tags: "ave" }, { $inc: { avaliacao: 3 } });
db.produtos.find({}, { nome: 1, _id: 0, avaliacao: 1 });
