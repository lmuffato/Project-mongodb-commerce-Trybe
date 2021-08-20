db.produtos.createIndex(
  { descricao: "text" },
  {
    // https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
    default_language: "portuguese", 
  },
  );
  
db.produtos.count(
  { 
    $text: {
      $search: "frango hamburguer",
      $language: "portuguese",
    },
  },
);
