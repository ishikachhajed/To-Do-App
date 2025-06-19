const max= prompt("Enter the max. num");

const random = Math.floor(Math.random() * max)+1;

let guess=prompt("guess the number");

while(true){
    if(guess == 'quit'){
        console.log("Goodbye");
        break;
    }
    if(guess==random){
        console.log("You got it!");
        break;
    } else if (guess>random){
        console.log("Too high");
    } else {
        console.log("Too low");
    }
    guess=prompt("guess the number");
}