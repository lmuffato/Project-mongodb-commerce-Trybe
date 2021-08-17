db.produtos.updateMany(
    { nome: "Big Mac" }, 
    { $set: { ultimaModificacao: new Date() } }, 
);

db.produtos.find(
    { ultimaModificacao: { $exists: true } }, 
    { nome: 1, _id: 0 },
);

// https://docs.mongodb.com/manual/core/shell-types/ ideia do new Date()