// 10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.
// use("commerce");
db.produtos.updateMany( // 1
  { },
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);
// 2 - Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateOne(
  { nome: "Big Mac"},
  { $set: { "vendasPorDia.3": 60 } },
);
// 3 - Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.
db.produtos.updateOne(
  { tags: { $in: ["bovino", "pão"]} },
  { $set: { "vendasPorDia.6": 120 } },
);
db.produtos.find( // 4
  { },
  { _id: 0, nome: 1, vendasPorDia: 1 },
);

