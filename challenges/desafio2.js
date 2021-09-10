// Inclua o campo valorUnitario em todos os documentos em que esse campo
// não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
// Utilizei o código do colega Edmilson, para entender como tranformar o número para number decimal
// https://github.com/tryber/sd-010-a-mongodb-commerce/pull/131/files
db.produtos.updateMany(
    { valorUnitario: { $exists: false } },
    { $set: {
        valorUnitario: NumberDecimal("0.00"),
    } },
);
db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
