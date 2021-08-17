db.produtos.find({ nome: { $in: [/Mc/i] } }).count();
