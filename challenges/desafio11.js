db.produtos.updateMany({}, { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } });

db.protudos.find({}, { _id: 0, nome: 1, tags: 1 });