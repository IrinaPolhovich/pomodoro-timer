const buttonStart = document.querySelector("#start");
const time = document.querySelector("#pomodoro-time");
let timerId;

buttonStart.addEventListener('click', function() {
    if (buttonStart.textContent == "stop") {
        clearInterval(timerId);
        buttonStart.textContent = "start";
    } else {
        buttonStart.textContent = "stop";
        timerId = setInterval(() => {
            let minutes = +time.innerHTML.split(":")[0];
            let seconds = +time.innerHTML.split(":")[1];
            if (seconds > 0) {
                seconds--;
            };
            if (seconds === 0 && minutes > 0) {
                minutes--;
                seconds = 59;
            };
            if (seconds === 0 && minutes === 0) {
                clearInterval(timerId);
                minutes = "25";
                seconds = "0";
                buttonStart.textContent = "start";
            };
            if (seconds < 10) {
                seconds = `0${seconds}`;
            };
            if (minutes < 10) {
                minutes = `0${minutes}`;
            };
            time.textContent = `${minutes}:${seconds}`;
        }, 1000);
    };
});