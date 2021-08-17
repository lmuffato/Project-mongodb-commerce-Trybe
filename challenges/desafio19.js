db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });

db.produtos.find({}, { nome: 1, descrcao: 1, descricaoSite: 1, _id: 0 }).pretty();
