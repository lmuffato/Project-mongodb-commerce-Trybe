// challenge 16;

db.produtos.find({ ingredientes: { $size: 4 } }).count();
