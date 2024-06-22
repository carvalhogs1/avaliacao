function registrarUsuario(event) {

    event.preventDefault();
  
    // Pegar os valores dos inputs
    var nome = document.getElementById("nome").value;
    var  qtd = document.getElementById("qtd").value;
    var  cod = document.getElementById("cod").value;
    var marca  = document.getElementById("marca").value;

  
    // Debugando os valores
    console.log(nome, qtd, cod, marca );
  

    var mysql = require("mysql2");

    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "sextoune",
    });
  
    connection.connect(function(error) {
      if (error) {
        console.log(error.code);
        console.log(error.fatal);
      }
    })
  
  
    var query = `INSERT INTO produtos (nome, quantidade, cod, marca) VALUES ("${nome}", "${qtd}", "${cod}", "${marca}")`;
  
  
    // Executar a query
    connection.query(query, function(error) {
      if(error) {
        console.log("Ocorreu um erro ao inserir no banco de dados")
      } else {
        alert("Cadastrado com sucesso")
      }
    })
  }
  

  var formulario = document.getElementById("fromss");
  formulario.addEventListener("submit", registrarUsuario);
  
  
  
  
  
  
  
  
  
  
  
 