function enviar() {
   var mensagem = document.getElementById("mensagem").value;
   console.log(mensagem)
   document.getElementById("MyElement").className = "msnv";
   document.getElementById("note").innerHTML = mensagem;
 }