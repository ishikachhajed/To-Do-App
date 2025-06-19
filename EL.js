//let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "red";
}

//btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

let btn = document.querySelector("button");
btn.addEventListener("dblclick", function (evt) {
  console.log(evt);
  console.log("button clicked");
});

let inp = document.querySelector("input");
inp.addEventListener("keydown", function (evt) {
  console.log("key is =", evt.key);
  console.log("key code is= ", evt.code); //arrowUp , arrowDown , ArraowLeft , ArraowRight
  if (evt == "ArrowUp") {
    console.log("char moves fwd");
  } else if (evt == "ArrowDown") {
    console.log("char moves bwd");
  } else if (evt == "ArrowLeft") {
    console.log("char moves left");
  } else if (evt == "ArrowRight") {
    console.log("char moves right");
  }
});

let form = document.querySelector("form");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("form submitted");
});

let form1 = document.querySelector("form1");
form1.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("form1 submitted");

  let input = document.querySelectorAll("input");
  console.dir(input);
  console.log(input.innerText);
});
