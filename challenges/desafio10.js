db.produtos.updateMany(
    {},
    { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);

db.profutos.updateOne(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
    { ingredientes: { $elemMatch: { $regex: /^pão/i } },
    tags: { $elemMatch: "bovino" },
 },
 { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });