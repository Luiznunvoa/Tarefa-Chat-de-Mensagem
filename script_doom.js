function enviar() {
   var mensagem = document.getElementById("mensagem").value;
   console.log(mensagem);

   // Cria uma nova seção para a mensagem
   const novaMensgem = document.createElement("section");
   novaMensgem.classList.add('msn');

   // Cria a seta
   const arrow = document.createElement("div");
   arrow.classList.add('arrow-left');

   // Cria a nota
   const note = document.createElement("div");
   note.classList.add('note');
   note.textContent = mensagem;

   // Adiciona a seta e a nota na nova mensagem
   novaMensgem.appendChild(arrow);
   novaMensgem.appendChild(note);

   // Seleciona o chatbox existente no DOM
   const main = document.getElementById("chatbox"); // Certifique-se de que o elemento tenha esse ID
   if (main) {
       // Adiciona a nova mensagem ao chatbox
       main.appendChild(novaMensgem);
   } else {
       console.error("Elemento chatbox não encontrado!");
   }
}