const hexN = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexbtn = document.querySelector(".hexbtn");
const bodybcg = document.querySelector("body");
const hex = document.getElementById("hex");
hexbtn.addEventListener("click", getHex);
function getHex() {
  let hexcol = "#";
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * hexN.length);
    hexcol = hexcol + hexN[r];
  }
  bodybcg.style.backgroundColor = hexcol;
  hex.innerHTML = `
    <h1>${hexcol}</h1>
    `;
}
