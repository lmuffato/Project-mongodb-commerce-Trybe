/* Desafio 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.
Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem: */

/* 1. Crie uma query que faça a renomeação do campo descricao para descricaoSite
em todos os documentos. */
db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

/* 2. Crie uma query que retorne o nome, descricao e descricaoSite de todos
os documentos. */
db.produtos.find(
  {},
  { _id: false, nome: true, descricao: true, descricaoSite: true },
);
