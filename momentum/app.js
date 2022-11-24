const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "tomato") {
    newColor = "blue";
  } else {
    newColor = "tomato";
  }
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
