db.produtos.updateMany({ }, { $set: { valorUnitario: NumberDecimal("0.00") } });
db.commerce.find({ }, { nome: 1, valorUnitario: 1 });
