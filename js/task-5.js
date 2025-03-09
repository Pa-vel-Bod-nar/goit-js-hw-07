function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChanger = document.querySelector("button.change-color");
const colorPointer = document.querySelector("span.color");

colorChanger.addEventListener("click", function(){
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorPointer.textContent = newColor;
} )