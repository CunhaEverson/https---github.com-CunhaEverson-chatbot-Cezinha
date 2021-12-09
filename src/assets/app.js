const chatButton = document.querySelector(".chatbox__button");
const chatContent = document.querySelector(".chatbox__support");
const icons = {
  isClicked: '<i class="fas fa-times"></i>',
  isNotClicked:
    '<img id="mlogo_cesar" src="./assets/imagens/mini_logo_cesar.png"/>',
};
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

const buttonOpt = document.querySelector(".button_faq");
const chatOpt = document.querySelector(".messages__item--visitor");
const chatMessages = new InteractiveButtons(buttonOpt, chatOpt);
chatMessages.displayOpt();

const btn1 = document.querySelector(".rh");
const btn2 = document.querySelector(".financeiro");
const btn3 = document.querySelector(".holerite");
const btn4 = document.querySelector(".relogioPonto");
const btn5 = document.querySelector(".beneficios");
const messageChat = document.querySelector(".messages__item--visitor");
const messageChat2 = document.querySelector(".messages__item--visitor2");
const messageChat3 = document.querySelector(".messages__item--visitor3");
const messageChat4 = document.querySelector(".messages__item--visitor4");
const messageChat5 = document.querySelector(".messages__item--visitor5");

btn1.addEventListener("click", () => {
  messageChat.classList.toggle("is--hide");
  messageChat2.classList.add("is--hide");
  messageChat3.classList.add("is--hide");
  messageChat4.classList.add("is--hide");
  messageChat5.classList.add("is--hide");
  messageChat.textContent = "Preciso de ajuda sobre Recursos Humanos.";
});
btn2.addEventListener("click", () => {
  messageChat2.classList.toggle("is--hide");
  messageChat.classList.add("is--hide");
  messageChat3.classList.add("is--hide");
  messageChat4.classList.add("is--hide");
  messageChat5.classList.add("is--hide");
  messageChat2.textContent = "Preciso de ajuda sobre o Financeiro.";
});
btn3.addEventListener("click", () => {
  messageChat.classList.add("is--hide");
  messageChat2.classList.add("is--hide");
  messageChat3.classList.toggle("is--hide");
  messageChat4.classList.add("is--hide");
  messageChat5.classList.add("is--hide");
  messageChat3.textContent = "Preciso de ajuda sobre o Holerite.";
});
btn4.addEventListener("click", () => {
  messageChat.classList.add("is--hide");
  messageChat2.classList.add("is--hide");
  messageChat3.classList.add("is--hide");
  messageChat4.classList.toggle("is--hide");
  messageChat5.classList.add("is--hide");
  messageChat4.textContent = "Preciso de ajuda sobre o Relógio de ponto.";
});
btn5.addEventListener("click", () => {
  messageChat.classList.add("is--hide");
  messageChat2.classList.add("is--hide");
  messageChat3.classList.add("is--hide");
  messageChat4.classList.add("is--hide");
  messageChat5.classList.toggle("is--hide");
  messageChat.classList.add("is--hide");
  messageChat5.textContent = "Preciso de ajuda sobre os Benefícios.";
});
