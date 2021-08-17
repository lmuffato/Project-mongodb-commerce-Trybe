/**
 * Consultei o repositório do Felipe Pimentel para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-commerce/tree/felipe-pimentel-mongodb-commerce
 */
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });