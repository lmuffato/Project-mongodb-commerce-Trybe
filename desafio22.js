db.produtos.find({ vendidos: { $mod: [5, 0] } }, { _id: 0, name: 1 });