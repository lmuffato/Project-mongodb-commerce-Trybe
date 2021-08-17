db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.find(
    { $and: [{ descricao: { $text: { $search: "frango" } } },
     { descricao: { $text: { $search: "hamburguer" } } }] },
).count();