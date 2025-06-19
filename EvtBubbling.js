let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
div.addEventListener("click", function (evt) {
    console.log("div clicked");
    console.log(evt);
});
ul.addEventListener("click", function (evt) {
    console.log("ul clicked");
    console.log(evt);
});
li.addEventListener("click", function (evt) {
    console.log("li clicked");
    console.log(evt);
});