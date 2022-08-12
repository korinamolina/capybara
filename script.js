const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdownTimer() {
    if (difference <= 0) {
        clearInterval(timerId);
    }
}

function getCorrectWord(num) {
    if (num < 10 && num > 0) {
        return `0${num}`;
    } else {
        return num;
    }
}

function calcTime() {
    const deadline = new Date("24 March 2023");
    const currentData = new Date();
    const difference = deadline - currentData;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor((difference / 1000 / 60 / 60) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);
    days.innerHTML = getCorrectWord(d);
    hours.innerHTML = getCorrectWord(h);
    minutes.innerHTML = getCorrectWord(m);
    seconds.innerHTML = getCorrectWord(s);
}
calcTime();

let timerId = setInterval(calcTime, 1000);