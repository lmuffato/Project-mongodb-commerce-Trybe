db.produtos.updateMany(
  {},
  { 
    $push: {
      tags: { 
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    }, 
  },
);