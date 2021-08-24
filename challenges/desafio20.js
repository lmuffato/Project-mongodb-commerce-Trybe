const queryNome = {
  nome: "Big Mac",
};

const projectionFind = {
  nome: 1, 
  curtidas: 1, 
  _id: 0,
};

db.produtos.updateMany(
  queryNome,
  { $unset: 
    { curtidas: "" }, 
  },
);

db.produtos.find({}, projectionFind);
