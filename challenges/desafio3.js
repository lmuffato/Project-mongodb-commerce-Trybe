db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tags: { $in: ["bovino"] } }, { $inc: { avaliacao: NumberInt(5) } });
