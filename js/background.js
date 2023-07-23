const body = document.querySelector("body");
const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = "url('" + `img/${chosenImage}` + "')";
body.style.backgroundSize = "cover";