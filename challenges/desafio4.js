db.produtos.updateMany({ nome: "Big Mac" },
    { $set: { $currentDate: { ultimaModificacao: { $type: "timestamp" } } } });

db.produtos.find({ ultimaModificacao: { $exists: true } },
    { _id: 0, nome: 1, ultimaModificacao: 1 });
