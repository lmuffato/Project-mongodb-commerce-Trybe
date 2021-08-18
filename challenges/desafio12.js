db.produtos.updateMany(
    {},
    { $push: { 
        valoresNutricionais: { 
            $each: [], 
            $sort: { percentual: -1 },
            },
        },
    },
);

db.produtos.find({}, { valoresNutricionais: 1, nome: 1, _id: 0 });