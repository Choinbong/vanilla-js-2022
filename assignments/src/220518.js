const clock = document.querySelector("#clock");

function getClock() {
    const xmas = new Date(2022, 11, 25);
    const date = new Date();

    let remain = xmas - date;
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;

    const days = String(Math.floor(remain / _day)).padStart(3, "0");
    const hours = String(Math.floor((remain % _day) / _hour)).padStart(2, "0");
    const minutes = String(Math.floor((remain % _hour) / _minute)).padStart(2, "0");
    const seconds = String(Math.floor((remain % _minute) / _second)).padStart(2, "0");

    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getClock();
setInterval(getClock, 1000);