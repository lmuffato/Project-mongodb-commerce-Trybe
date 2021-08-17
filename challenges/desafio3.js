db.products.updateMany({}, { avaliacao: NumberInt("0") });

db.products.updateMany({ tags: { $elemMatch: { $eq: "bovino" } } }, { $inc: { avaliacao: 5 } });

db.products.updateMany({ tags: { $elemMatch: { $eq: "ave" } } }, { $inc: { avaliacao: 3 } });

db.products.find({}, { nome: 1, avaliacao: 1, _id: 0 });