const background = document.body;
let screenSize = window.innerWidth;

function handleWindowResize() {
  if (screenSize <= 300) {
    background.className = "green";
}

window.addEventListener("resize", handleWindowResize);