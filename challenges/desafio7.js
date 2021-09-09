db.produtos.updateMany(
    {},
    { $pull: {
        ingredientes: { $in: ["cebola", "cebola grelhada"] },
      },
    },
  );
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
