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
