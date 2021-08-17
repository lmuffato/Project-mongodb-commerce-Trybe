// 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.

db.produtos.updateMany({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });
db.produtos.find({ }, { nome: 1, ingredientes: 1, _id: 0 }); 