/* let smallImg = document.getElementsByClassName("oldImg");

for(let i=0;i<smallImg.length;i++){
    smallImg[i].src = "spiderman_img.png";
    console.log('Value of img No. ${i} is changed');
}
    


let links = document.querySelectorAll(".box a");
for(links of links){
    links.style.color = "purple";
}

*/


//for(i=0;i<links.length;i++){
//  links[i].style.color = "yellow";
//}

let para1 = document.createElement("p");
para1.innerText="Hey! I am red";
document.querySelector("body").appendChild(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText="Hey! I am blue";
document.querySelector("body").appendChild(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2= document.createElement("p");

h1.innerText="Hey! I am in a div";
para2.innerText="Hey! ME TOO ";

div.appendChild(h1);
div.appendChild(para2);
div.classList.add("box");

document.querySelector("body").prepend(div);

let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username")

/*let h1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);

let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);*/

