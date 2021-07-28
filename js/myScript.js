let panel = document.getElementsByClassName("block__itemsHolder");
const itemsArr = [];
for (let i = 0; i < 6; i++) {
    itemsArr.push(document.querySelector(`#item` + i));
}
console.log(itemsArr);

const range = 70;

let mem1 = range;
let mem2 = range;
let counter1 = 0;
let counter2 = -3;

let bigItemIndex = -2;


function inputCallBack(event) {
    animate();
    // try {
    //     itemsArr[bigItemIndex].style.width = `300px`;
    //     itemsArr[bigItemIndex].style.height = `50px`;
    // } catch (e) {
    //
    // }
    // if (++bigItemIndex >= 0) {
    //     itemsArr[bigItemIndex].style.width = `400px`;
    //     itemsArr[bigItemIndex].style.height = `80px`;
    // }
    // if (bigItemIndex === 6) bigItemIndex = 0;
    // height: 80px;
    // font-size: 50px;
}

function animate() {

    if (++counter1 > 0) {
        panel[0].style.transform = "translateY(-" + mem1 + "px)";
        mem1 += range;
    }
    if (++counter2 > 0) {
        panel[1].style.transform = "translateY(-" + mem2 + "px)";
        mem2 += range;
    }
    if (counter1 === 6) {

        panel[0].style.transform = "translateY(-" + 0 + "px)";
        mem1 = range;
        counter1 = 0;
    }
    if (counter2 === 6) {
        panel[1].style.transform = "translateY(-" + 0 + "px)";
        mem2 = range;
        counter2 = 0;
    }
}

window.addEventListener("keydown", inputCallBack);
