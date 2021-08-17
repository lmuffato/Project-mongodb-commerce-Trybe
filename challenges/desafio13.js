// Murilo Gonçalves me explicou e ajudou a entender a utilização do $elemMatch
// https://github.com/MuriloGon/

db.produtos.updateMany(
    { 
     valoresNutricionais: { 
         $elemMatch: 
            { tipo: "sódio", percentual: { $gte: 40 } } } },
    { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });