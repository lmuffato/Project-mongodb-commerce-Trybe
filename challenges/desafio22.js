db.produtos.find({ vendidos: { $mod: [5, 0] } }, { nome: true, vendidos: true, _id: false });
// agradecimento a Vinicius Rodrigues e iago ferreira no auxilio/referencias durante o projeto