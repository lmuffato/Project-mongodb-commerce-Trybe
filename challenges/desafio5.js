db.produtos.updateMany(
    { nome: { $in: [
        "Big Mac",
        "Cheddar McMelt", 
        "Extra Chicken"], 
    } },
    { $addToSet: { ingredientes: "Ketchup" } },
);

db.produtos.find(
    {},
    { nome: 1, ingredientes: 1, _id: 0 },
);