// 1ª Query
db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

//  2ª Query
db.produtos.updateMany({ tags: { $in: ["bovino"] } }, { $inc: { avaliacao: 5 } });

// 3ª Query
db.produtos.updateMany({ tags: { $in: ["ave"] } }, { $inc: { avaliacao: 3 } });

// 4ª Quety
db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });