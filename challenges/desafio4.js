db.produtos.updateOne(
  {
    _id: {
      $eq: ObjectId("5f280af11532b7276329ba47"),
    },
  },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
);

db.produtos.find( 
  {
    ultimaModificacao: {
      $exists: true,
    },
  }, 
  { _id: 0, nome: 1 },
);
