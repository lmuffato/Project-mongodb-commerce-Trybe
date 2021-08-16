db.produtos.find({ $expr: { $gt: ["curtidas", "vendidos"] } }, { nome: 1 });
