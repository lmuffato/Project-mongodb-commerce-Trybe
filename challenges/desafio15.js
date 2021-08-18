db.produtos.find({
  nome: {
    $regex: /^MC/i,
  },
}).count();
