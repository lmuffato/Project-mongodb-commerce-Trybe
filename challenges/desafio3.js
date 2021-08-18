db.produtos.updateMany(
    {},
    { $set: { avaliacao: 0 } },
);

db.produtos.updateMany(
    { "tags.0": "bovino" },
    { $inc: { avaliacao: 5 } },
);

db.produtos.updateMany(
    { "tags.0": "ave" },
    { $inc: { avaliacao: 3 } },
);

db.produtos.find(
    {},
    { nome: 1, avaliacao: 1, _id: 0 },
);