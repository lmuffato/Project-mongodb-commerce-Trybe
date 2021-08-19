// Consultada a solução do Vinicius Franca - Turma 10-A
// Consultado conteúdo do Course https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-complexos-arrays-parte-1/e58a3ec0-3a24-4d96-97f1-bfeec6d1b253/conteudos/5891b5f5-54db-41c3-8aaf-1630f71edb42/operador-pull/48d9f30c-6646-4251-a144-cdf756edd07e?use_case=side_bar
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } }
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
