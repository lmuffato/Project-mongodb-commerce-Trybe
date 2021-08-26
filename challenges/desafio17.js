/* Desafio 17 - Conte quantos documentos contêm as palavras frango ou
hamburguer utilizando o operador $text.
Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem: */

/* 1. Crie uma query que faça a criação de um índice do tipo text no campo descricao
com o idioma padrão portuguese. */
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

/* 2. Crie uma query que retorne a quantidade de documentos que contêm as palavras
frango ou hamburguer utilizando o operador $text. */
db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
