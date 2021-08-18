db.produtos.find(
    { vendidos: { $mod: [5, 0] } }, 
    { nome: 1, vendidos: 1, _id: 0 },
);

// para ser multiplo de 5 precisa ser divisivel por 5, por isso o operador mod
