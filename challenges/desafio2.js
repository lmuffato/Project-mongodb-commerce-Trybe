db.produtos.updateMany({}, { $set: { valorUnitario: NumberDecimal("0.00") } });

db.produtos.find({}, { _id: 0, valorUnitario: 1, nome: 1 });
