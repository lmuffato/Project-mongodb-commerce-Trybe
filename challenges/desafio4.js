db.produtos.updateOne({
  nome: "Big Mac",
},
{
  $currentDate: {
    ultimaModificacao: {
      $type: "date",
    },
  },
},
{
  upsert: 1,
});

db.produtos.find({
  ultimaModificacao: { $exists: 1 },
},
{
  nome: 1, _id: 0,
});
