const background = document.body;

function handleWindowResize() {
  let screenSize = window.innerWidth;
  if (screenSize <= 200) {
    background.classList.add("green");
    background.classList.remove("yellow");
  } else if (screenSize > 200 && screenSize <= 400) {
    background.classList.remove("green");
    background.classList.add("yellow");
    background.classList.remove("peach");
  } else if (screenSize > 400 && screenSize <= 600) {
    background.classList.remove("yellow");
    background.classList.add("peach");
    background.classList.remove("orange");
  } else if (screenSize > 600 && screenSize <= 800) {
    background.classList.remove("peach");
    background.classList.add("orange");
  }
}

window.addEventListener("resize", handleWindowResize);
