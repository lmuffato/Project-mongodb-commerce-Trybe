// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
db.produtos.updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo", "Cheddar McMelt", "Extra Chicken"] } },
    { $addToSet: { ingredientes: { $each: ["ketchup"] } } },
);
// Crie uma query que retorne o nome e ingredientes de todos os documentos
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
