db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pull: { ingredientes: "pão escuro com gergelim" } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });