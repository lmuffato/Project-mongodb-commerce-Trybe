db.produtos.updateMany({
  valorUnitario: { $exists: false },
},
  { $set: { valorUnitario: NumberDecimal("0.00") } });

db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });

// consulta ao conteúdo presente no site https://docs.mongodb.com/manual/core/shell-types/ 
// para dúvidas com relação ao formato passado dentro do NumberDecimal.