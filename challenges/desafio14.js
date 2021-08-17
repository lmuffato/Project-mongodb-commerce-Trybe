db.produtos.updateMany(
  { valoresNutricionais: { 
    $elemMatch: { 
      tipo: "sódio", 
      percentual: { $lt: 20, $gt: 40 }, 
    }, 
  }, 
}, {
    $push: { 
      tags: "contém sódio", 
    },
  },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });