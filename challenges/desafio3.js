db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany(
    { tags: { $elemMatch: "bovino" } },
     { $inc: { avaliacao: 5 } },
);

b.produtos.updateMany(
    { tags: { $elemMatch: "ave" } },
     { $inc: { avaliacao: 3 } },
);

db.produtos.find(
    {},
    {
        nome: 1,
        avaliacao: 1,
        _id: 0,
    },
);