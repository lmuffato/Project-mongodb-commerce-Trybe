/*
  criação do Index com linguagem portuguese baseada no código 
  da aula ao vivo do dia 24.3
  Link: https://github.com/tryber/sd-10a-live-lectures/blob/lecture/24.3/24_3/10_create_index_language.js
*/

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });
