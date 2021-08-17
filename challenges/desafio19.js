// 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.
db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } }, false, true);
db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });

// Source:
// https://qastack.com.br/programming/9254351/how-can-i-rename-a-field-for-all-documents-in-mongodb#:~:text=No%20MongoDB%203.2%2C%20voc%C3%AA%20tamb%C3%A9m%20pode%20usar%20db.&text=e%20se%20estiver%20obtendo%2C%20ele,existir%2C%20o%20padr%C3%A3o%20ser%C3%A1%20false%20.