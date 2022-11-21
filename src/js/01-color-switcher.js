function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnEl = document.querySelector("button[data-start]");
// console.log(startBtnEl);
const stopBtnEl = document.querySelector("button[data-stop]");
// console.log(stopBtnEl);
const bodyEl = document.querySelector("body");
// console.log(bodyEl);
let colorChangeId = null;

const onStartBntClick = event => {
    colorChangeId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtnEl.setAttribute("disabled", "disabled")
    },1000)
}
const onStopBtnClick = event => {
    clearInterval(colorChangeId);
    startBtnEl.removeAttribute("disabled", "disabled")
}

startBtnEl.addEventListener('click', onStartBntClick);
stopBtnEl.addEventListener('click', onStopBtnClick)