// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {};
const h2 = document.querySelector("h2");
const currentColor = h2.style.color;
let newColor = "";

h2.addEventListener("mouseenter", handleMouseEnter);
h2.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleTitleClick);

function handleMouseEnter() {
  h2.innerText = "Mouse is here!";
  newColor = colors[0];
  h2.style.color = newColor;
}
function handleMouseLeave() {
  h2.innerText = "Mouse is gone!";
  newColor = colors[1];
  h2.style.color = newColor;
}
function handleTitleClick() {
  h2.innerText = "That was a right click!";
  newColor = colors[2];
  h2.style.color = newColor;
}
function handleWindowResize() {
  h2.innerText = "You just resized!";
  newColor = colors[3];
  h2.style.color = newColor;
}
