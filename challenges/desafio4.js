db.produtos.updateOne({ nome: /big mac/i },
  { $currentDate: { ultimaModificacao: { $type: "timestamp" } } });

db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
