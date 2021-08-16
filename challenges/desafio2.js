// Inclua o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", 
// com o tipo NumberDecimal.
// Para isso, escreva no arquivo desafio2.js duas queries, nesta ordem:

// Crie uma query que adicione o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a 
// ele o valor "0.00", com o tipo NumberDecimal.

// Crie uma query que retorne o nome e valorUnitario de todos os produtos.

db.produtos.updateMany(
  {
    valorUnitario: { $exists: false },
  },
  {
    $set: {
      valorUnitario: NumberDecimal("0.00"),
    },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    valorUnitario: true,
  },
);
