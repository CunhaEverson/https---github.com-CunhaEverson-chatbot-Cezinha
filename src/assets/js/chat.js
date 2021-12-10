class InteractiveChatbox {
    constructor(a, b, c) {
        this.args = {
            button: a,
            chatbox: b
        }
        this.icons = c;
        this.state = false;
    }

    display() {
        const { button, chatbox } = this.args;

        button.addEventListener('click', () => this.toggleState(chatbox))
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHideChatBox(chatbox, this.args.button);
    }

    showOrHideChatBox(chatbox, button) {
        if (this.state) {
            chatbox.classList.add('chatbox--active')
            this.toggleIcon(true, button);
        } else if (!this.state) {
            chatbox.classList.remove('chatbox--active')
            this.toggleIcon(false, button);
        }
    }

    toggleIcon(state, button) {
        const { isClicked, isNotClicked } = this.icons;
        let b = button.children[0].innerHTML;

        if (state) {
            button.children[0].innerHTML = isClicked;
        } else if (!state) {
            button.children[0].innerHTML = isNotClicked;
        }
    }
}

function click_faq_btn(btn_click) {
    const faq_message = document.createElement("DIV");
    faq_message.setAttribute("class", "messages__item messages__item--visitor");

    faq_message.innerHTML = btn_click.innerHTML;

    document.getElementById("div_messages").appendChild(faq_message);
}

var input = document.getElementById("input_chatbox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("msg_button").click();
    }
})


function click_msg_btn() {
    const message = document.createElement("DIV")
    message.setAttribute("class", "messages__item messages__item--visitor");

    message.innerHTML = document.getElementById("input_chatbox").value;

    document.getElementById("div_messages").appendChild(message);

    document.getElementById("input_chatbox").value = '';
}
