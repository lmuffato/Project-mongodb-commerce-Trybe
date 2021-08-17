// 6 - Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
// Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany({
  $or: [
    { nome: { $eq: "Big Mac" } },
    { nome: { $eq: "Quarteirão com Queijo" } },
],
}, {
  $addToSet: { ingredientes: "bacon" },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});