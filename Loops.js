color="red";
if(color==="red"){
    console.log('Stop!');
}
if(color==="yellow"){
    console.log('Slow down');
}
if(color==="green"){
    console.log('GO');
}



let age=14;
if(age>=18){
    console.log('You can drive');
}
else if (age<=18){
    console.log('You cannot drive');
}   



console.log("Hello world");
let a=10;
let b=20;
console.log(a+b);
let penprice = 20;
let eraserprice = 100; let total =`The total price is ${penprice} Rupees`;
console.log(total);



let size = "L";
if(size === 'S'){
    console.log("PRICE IS 250");
}
else if(size === 'M'){
    console.log("PRICE IS 345");
}
else if(size === 'L'){
    console.log("PRICE IS 450");
}
else if(size === 'XL'){
    console.log("PRICE IS 500");
}
/*
//alert and prompt
alert("Something happened");
console.log("this is simple log");
console.error("this is error log");

prompt("Enter your name");
let name=prompt("Enter your name");
console.log(NAME);
*/

//String methods//trim
//let msg = "        Hellloooooo      ";
let msg = "      ishikachhajed       ";//index of
let newmsg = msg.trim().toUpperCase();
//let newmsg=msg.trim();
console.log(newmsg);
//newmsg = newmsg.toUpperCase();
//alert("Preeti not found!");
//prompt("Enter your name");

const mul=(a,b)=>{
    console.log(a*b);
}
/*
//set Timeout 
console.log("Hi there");
setTimeout(()=>{
    console.log("This Side");
},9000);
console.log("Ishika");
*/
//set Interval
let id=setInterval(() =>{
    console.log("Ishika");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

[1,2,3,4,5].reduce((a,b)=>{
    
})








