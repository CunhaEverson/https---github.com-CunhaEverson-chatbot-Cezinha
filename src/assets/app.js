const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<i class="fas fa-times"></i>',
    isNotClicked: '<img id="mlogo_cesar" src="./assets/imagens/mini_logo_cesar.png"/>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);