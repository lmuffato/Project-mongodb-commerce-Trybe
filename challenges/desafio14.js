db.produtos.updateMany(
  { $and: [{ "valoresNutricionais.tipo": "sódio" }, 
  { "valoresNutricionais.2.percentual": { $gt: 20 } },
   { "valoresNutricionais.2.percentual": { $lt: 40 } }] },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find(
  { }, 
  { nome: 1, tags: 1, _id: 0 },
  );
