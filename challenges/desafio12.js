db.produtos.updateMany({},
{ $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } });
db.produtos.find({}, { _id: 0, valoresNutricionais: 1, nome: 1 });