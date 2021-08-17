db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
db.produtos.find({}, { nome: true, descricao: true, descricaoSite: true, _id: false });