db.produtos.count({
  nome: { $regex: /[M][c]/i },
});

// requisito feito com a ajuda do seguinte vídeo https://www.youtube.com/watch?v=d2uqo6PhdM4
// para entendimento da criação das expressões regulares.