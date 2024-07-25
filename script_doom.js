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

   // Cria o elemento cards
   const cards = document.createElement("div");
   cards.classList.add('cards');

   // Cria os inputs dentro de cards
   const inputDele = document.createElement("input");
   inputDele.classList.add('dele');
   inputDele.type = 'button';
   inputDele.value = 'deletar';

   const inputEdit = document.createElement("input");
   inputEdit.classList.add('edit');
   inputEdit.type = 'button';
   inputEdit.value = 'editar';

   // Adiciona os inputs ao elemento cards
   cards.appendChild(inputDele);
   cards.appendChild(inputEdit);

   // Adiciona a seta, a nota e o cards na nova mensagem
   novaMensgem.appendChild(arrow);
   novaMensgem.appendChild(note);
   novaMensgem.appendChild(cards);

   // Seleciona o chatbox existente no DOM
   const main = document.getElementById("chatbox"); // Certifique-se de que o elemento tenha esse ID
   if (main) {
       // Adiciona a nova mensagem ao chatbox
       main.appendChild(novaMensgem);
   } else {
       console.error("Elemento chatbox não encontrado!");
   }

   // Adiciona evento de clique ao botão de deletar
   inputDele.addEventListener('click', function() {
       main.removeChild(novaMensgem);
   });

   // Adiciona evento de clique ao botão de editar
   inputEdit.addEventListener('click', function() {
       var newMessage = prompt("Edite sua mensagem:", note.textContent);
       if (newMessage !== null) {
           note.textContent = newMessage;
       }
   });
}