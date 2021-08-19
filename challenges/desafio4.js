// consultada a solução do Vinicius Franca - Turma 10-A
// Revisão do conteúdo no Course https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-simples/5b7a5a21-706a-4f75-9354-cbd569ad7de3/conteudos/f3f758ea-b5de-4fae-a5e1-b922fe9eee99/operador-currentdate/9fb7a079-d23c-4f7f-ba24-a529da6a3c65?use_case=side_bar
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);
