use("commerce");
db.produtos.updateMany(
  {},
  {
    $set: {
      criadoPor: "Ronald McDonald",
    },
  },
);

use("commerce");
db.produtos.find();
