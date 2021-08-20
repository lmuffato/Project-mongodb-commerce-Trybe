// challenge 15;

db.produtos.find({ nome: { $regex: /Mc/i } }).count();
