const queryAll = {};

const projectionFind = {
  nome: 1, 
  descricao: 1,
  descricaoSite: 1, 
  _id: 0,
};

db.produtos.updateMany(
  queryAll,
  { $rename: 
    { descricao: 
      "descricaoSite",
    },  
  },
);

db.produtos.find(queryAll, projectionFind);
