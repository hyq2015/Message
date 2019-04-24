const warnImg = require("./images/warn.png"),
    errorImg = require("./images/error.png"),
    successImg = require("./images/success.png"),
    IMG = {
        warn: warnImg,
        error: errorImg,
        success: successImg
    };
class Message {
    constructor () {
        this.fadeTime = 2500;
        this.messageContainer = null;
    }

    renderDom (type, args) {

        if (!this.messageContainer) {
            this.messageContainer = document.createElement("div");
            this.messageContainer.className = "r-message-container";
        }
        let divOuter = document.createElement("div"),
            div = document.createElement("div"),
            img = document.createElement("img"),
            span = document.createElement("span");
        div.className = "r-alert";
        img.className = "r-alert-img";
        if (IMG[type]) {
            img.src = IMG[type];
        } else {
            img.src = IMG.warn;
        }
        span.innerText = args.txt;
        span.className = "r-warn-txt";
        div.appendChild(img);
        divOuter.className = "r-alert-outer";
        div.appendChild(span);
        divOuter.appendChild(div);
        this.messageContainer.appendChild(divOuter);
        document.querySelector("body").appendChild(this.messageContainer);
        setTimeout(() => {
            this.messageContainer.removeChild(divOuter);
        }, args.time || this.fadeTime);
    }

    /**
     *
     * @param args - {txt: "", time: 2500}
     */
    warn (args = {txt: "", time: 2500}) {
        this.renderDom("warn", args);
    }
    error (args = {txt: "", time: 2500}) {
        this.renderDom("error", args);
    }
    success (args = {txt: "", time: 2500}) {
        this.renderDom("success", args);
    }
}

export default new Message();
