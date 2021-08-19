db.produtos.find({ vendidos: { $mod: [5, 0] } }, { nome: true, vendidos: true, _id: false });
