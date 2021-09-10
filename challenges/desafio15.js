// Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas
// Consultei o comando no projeto do colega Alan Albuquerque
db.produtos.count({ nome: { $regex: /Mc/i } });