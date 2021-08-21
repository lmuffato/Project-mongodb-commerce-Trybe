db.produtos.updateMany({},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: { tags: 1 },
      },
    },
  });

db.produtos.find({},
{
  nome: 1, tags: 1, _id: 0,
});
