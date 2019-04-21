class Message {
    constructor () {
        this.fadeTime = 2000;
        this.messageContainer = null;
    }

    renderDom (type, args) {
        if (!this.messageContainer) {
            this.messageContainer = document.createElement("div");
            this.messageContainer.className = "r-message-container";
        }
        let divOuter = document.createElement("div"), div = document.createElement("div");
        div.className = "r-" + type;
        divOuter.className = "r-" + type + "-outer";
        div.innerText = args.txt;
        divOuter.appendChild(div);
        this.messageContainer.appendChild(divOuter);
        document.querySelector("body").appendChild(this.messageContainer);
        setTimeout(() => {
            this.messageContainer.removeChild(divOuter);
        }, args.time || this.fadeTime);
    }

    warn (args = {txt: "", time: 2000}) {
        this.renderDom("warn", args);
    }
}

export default new Message();
