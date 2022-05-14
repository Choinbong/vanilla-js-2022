const body = document.querySelector("body");
const h2 = document.createElement("h2");

body.style.backgroundColor = "#914ead";
h2.innerText = "Hello!";
body.appendChild(h2);
h2.style.color = "white";

window.onresize = function () {
    let innerWidth = window.innerWidth;
    if (innerWidth > "1300") {
        body.style.backgroundColor = "#ffce4b";
    } else if (innerWidth < "800") {
        body.style.backgroundColor = "#2d8cd5";
    } else {
        body.style.backgroundColor = "#914ead";
    }
};
