const itemsHolder = document.querySelector(".eng-output-block__items-holder");
const wordsArr = ["First", "Second", "Third", " Fourth", "Fifth", "asdas", "asdas", "asdas", "asdas", "end"];

class Controller {
    constructor(itemsHolder, wordsArr) {
        this.index = 0;
        this.itemsHolder = itemsHolder;
        this.wordsArr = wordsArr;

        this.createItem(-2);
        this.createItem(-1);
        for (let i = 0; i < 3; i++) {
            this.createNext();
        }
        this.increase(document.querySelector("#item0"));
    }

    createItem(idNum, text = " ") { //re with factory
        if (this.wordsArr.length > this.index) {
            let newItem = document.createElement("div");
            newItem.classList.add("item");
            newItem.id = "item" + idNum;
            newItem.textContent = text;
            this.itemsHolder.append(newItem);
        }
    }

    createNext() {
        this.createItem(this.index, this.wordsArr[this.index++]);
    }

    slowRemove(item) {
        (function animate(item, from, to, height, padding, margin) {
            item.style.maxHeight = (height -= 2) + "px";
            item.style.minHeight = (height) + "px";
            item.style.margin = (margin -= 0.1) + "px";
            item.style.padding = (padding -= 0.4) + "px";
            if (from++ <= to) {
                requestAnimationFrame(() => animate(item, from, to, height, padding, margin));
            } else {
                item.remove();
            }
        })(item, 0, 50, 100, 20, 5);
    }

    increase(item) {
        (function animate(item, from, to, width, height, fontSize) {
            item.style.width = (width += 2) + "px";
            item.style.minHeight = (height += 1) + "px";
            item.style.fontSize = (fontSize += 1) + "px";
            if (from++ <= to) {
                requestAnimationFrame(() => animate(item, from, to, width, height, fontSize));
            }
        })(item, 0, 50, 400, 100, 70);
    }

    decrease(item) {
        (function animate(item, from, to, width, height, fontSize) {
            item.style.width = (width -= 2) + "px";
            item.style.minHeight = (height -= 1) + "px";
            item.style.fontSize = (fontSize -= 1) + "px";
            if (from++ <= to) {
                requestAnimationFrame(() => animate(item, from, to, width, height, fontSize));
            }
        })(item, 0, 50, 500, 150, 130);
    }

    next() {
        this.createNext();
        this.slowRemove(document.querySelector("#item" + (this.index - 6) + ""));
        this.decrease(document.querySelector("#item" + (this.index - 4) + ""));
        this.increase(document.querySelector("#item" + (this.index - 3) + ""));
    }
}

const controller = new Controller(itemsHolder, wordsArr);

document.querySelector(".input").addEventListener('keydown', (event) => {
    if (event.key === " ") {
        // alert(document.querySelector(".input").value);
        document.querySelector(".input").value = "";
        controller.next();
    }
});

function inputReader() {
    let textInput = document.querySelector(".input").value;
}


