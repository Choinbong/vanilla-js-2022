const timer = document.querySelector(".timer");

function countdown() {
    const today = new Date();

    const year = calcYear(today.getFullYear(), today.getMonth(), today.getDate());
    const christmas = new Date(year, 11, 25);

    let remain = christmas - today;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const days = String(Math.floor(remain / day)).padStart(3, "0");
    const hours = String(Math.floor(remain % day / hour)).padStart(2, "0");
    const minutes = String(Math.floor(remain % hour / minute)).padStart(2, "0");
    const seconds = String(Math.floor(remain % minute / second)).padStart(2, "0");

    timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function calcYear(year, month, day) {
    if (month === 11 && day > 25) {
        return year + 1;
    } else {
        return year;
    }
}

countdown();
setInterval(countdown, 1000);
