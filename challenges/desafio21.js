// 21 - Retorne o nome dos sanduíches em que o número de curtidas é maior que
// o número de sanduíches vendidos.

db.produtos.find({ $where: "this.curtidas > this.vendidos" }, { nome: 1, _id: 0 });
