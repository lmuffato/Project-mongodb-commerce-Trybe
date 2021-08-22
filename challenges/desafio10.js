db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateMany({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });
// requisito feito com a contribuição do meu colega Arnaelcio turma 8; 
// https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files
