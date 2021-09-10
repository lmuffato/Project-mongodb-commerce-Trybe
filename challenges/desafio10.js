// Crie uma query que inclua um array com sete posições em todos os sanduíches. Cada uma delas representará um dia da 
// semana, e cada posição iniciará em 0. O array deve se parecer como abaixo
db.produtos.updateMany(
    {},
    { $set: {
        vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    } },
);
// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60
db.produtos.updateOne(
    { nome: "Big Mac" },
    { $set: {
        "vendasPorDia.3": 60,
    } },
);
// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.
db.produtos.updateMany(
    { tags: { $all: ["bovino", "pão"] } },
    { $set: {
        "vendasPorDia.6": 120,
    } },
);
// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });