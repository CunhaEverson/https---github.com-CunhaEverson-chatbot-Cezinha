class InteractiveChatbox {
  constructor(a, b, c) {
    this.args = {
      button: a,
      chatbox: b,
    };
    this.icons = c;
    this.state = false;
  }

  display() {
    const { button, chatbox } = this.args;

    button.addEventListener("click", () => this.toggleState(chatbox));
  }

  toggleState(chatbox) {
    this.state = !this.state;
    this.showOrHideChatBox(chatbox, this.args.button);
  }

  showOrHideChatBox(chatbox, button) {
    if (this.state) {
      chatbox.classList.add("chatbox--active");
      this.toggleIcon(true, button);
    } else if (!this.state) {
      chatbox.classList.remove("chatbox--active");
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

class InteractiveButtons {
  constructor(a, b) {
    this.args = {
      buttonOpt: a,
      chatOpt: b,
    };
    this.state = false;
  }

  displayOpt() {
    const { buttonOpt, chatOpt } = this.args;

    buttonOpt.addEventListener("click", () => this.toggleStateOpt(chatOpt));
  }

  toggleStateOpt(chatOpt) {
    this.state = !this.state;
    this.showOrHideChatBoxOpt(chatOpt, this.args.buttonOpt);
  }

  showOrHideChatBoxOpt(chatOpt) {
    if (!this.state) {
      chatOpt.classList.remove("is--hide");
    } else if (this.state) {
      chatOpt.classList.add("is--hide");
    }
  }
}
