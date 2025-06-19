let gameseq = [];
let userseq = [];
let btns = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = ` Level${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameseq.push(randColor);
  console.log(gameseq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  //console.log("curr level:", level);
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game Over ! Your Score was <b>${level}</b> <br> Press any key to start level`;
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  console.log(userseq);

  checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}
