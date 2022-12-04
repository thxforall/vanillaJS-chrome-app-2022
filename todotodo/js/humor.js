var imgGroup = [
  "beer.gif",
  "cat.gif",
  "cute.gif",
  "dance.gif",
  "dog.gif",
  "lego.gif",
  "plane.gif",
  "playboy.gif",
  "robot.gif",
];

const randomImg = imgGroup[Math.floor(Math.random() * imgGroup.length)];

const humorImages = document.createElement("img");

humorImages.src = `img/${randomImg}`;

const humorBox = document.querySelector(".humor-gif");

humorBox.appendChild(humorImages);

function onClickImg() {
  const randomImg = imgGroup[Math.floor(Math.random() * imgGroup.length)];
  imgSrc.src = `img/${randomImg}`;
}

const imgSrc = document.querySelector("img");

imgSrc.addEventListener("click", onClickImg);
