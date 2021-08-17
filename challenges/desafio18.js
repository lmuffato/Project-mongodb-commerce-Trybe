db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.find(
    { descricao: { $text: { $search: "feito com" } } },    
).count();