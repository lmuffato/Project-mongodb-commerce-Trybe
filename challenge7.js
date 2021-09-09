db.produtos.updateMany(
    {}, { $pull: { ingredientes: { $in: ["cebola"] } } },
);