var a = document.querySelectorAll(".sidebar-item");

function clickHandler(index) {
  a.forEach((element) => {
    element.style.color = "";
    element.style.borderBottom = "";
    element.style.opacity = "1";
  });
  a[index].style.color = "black";
  a[index].style.borderBottom = "2px solid blue";
  a[index].style.opacity = "0.5";
}
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => clickHandler(i));
}
var f = document.querySelector(".modal-button");
var b = document.querySelector(".simple-modal");
var c = document.querySelectorAll(".action-btn");

f.addEventListener("click", () => clickHandler1());
function clickHandler1() {
  b.style.display = "flex";
  f.disabled = "true";
  f.style.opacity = "0.4";
}
c[0].addEventListener("click", () => actionHandler());
c[1].addEventListener("click", () => actionHandler());
const actionHandler = () => {
  b.style.display = "none";
  f.style.opacity = "1";
  f.disabled = false;
};
