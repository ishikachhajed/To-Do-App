let btns = document.querySelectorAll("button");
for(btn of  btns){
   // btn.onclick = sayHello; 
    //btn.onmouseenter = function(){
       // console.dir("you entered a button");
    //btn.addEventListener("click",sayHello);
    //btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("double clicked");
        
    });

    //console.dir(btn);
}
function sayHello(){
    alert("Hello!");
}
function sayName(){
    alert("My name is Ishika");
}
/*console.dir(btn);

btn.onclick = function() {
    console.log("clicked");//alert can also be created
}*/