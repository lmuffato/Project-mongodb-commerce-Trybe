db.produtos.updateMany({ }, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });
db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $set: { "vendasPorDia.6": 120 } });
db.produtos.find({ }, { nome: 1, vendasPorDia: 1 }); 
