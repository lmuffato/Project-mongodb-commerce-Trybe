// 21 - Retorne o nome dos sanduíches em que o número de curtidas é maior que
// o número de sanduíches vendidos.

db.produtos.find({ $where: "this.curtidas > this.vendidos" }, { nome: 1, _id: 0 });

// Source:
// https://qastack.com.br/programming/4442453/mongodb-query-condition-on-comparing-2-fields
