db.produtos.updateMany(
  {},
  { $rename: {
    descricao: "descricaoSite",
    },
  },
  );