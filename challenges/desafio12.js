db.produtos.updateMany({}, { $push: { valoresNutricionais: { $each: [], $sort: -1 } } });
db.produtos.find({}, { nome: true, valoresNutricionais: true, _id: false });