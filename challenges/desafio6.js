// 6 - Inclua bacon no final da lista de ingredientes
// dos sanduíches Big Mac e Quarteirão com Queijo.

db.produtos.updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
    { $push: {
        ingredientes: "bacon",
    } },
);

db.produtos.find({ }, { nome: 1, ingredientes: 1, _id: 0 });
