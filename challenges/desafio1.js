db.produtos.updateMany(
  {},
  {
    $set: {
      "criadoPor": "Ronald McDonald"
    },
  },
);

db.produtos.find(
  {
    "criadoPor": "Ronald McDonald"
  }
);