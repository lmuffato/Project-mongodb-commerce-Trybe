db.produtos.updateMany({}, { $push: { "valoresNutricionais": { $each: [], $sort: { percentual: -1 } } } });

db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });

// https://www.geeksforgeeks.org/mongodb-sort-modifier/
