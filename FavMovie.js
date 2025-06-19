let FavoriteMovie = "YJHD";
let guess = prompt("GUESS MY FAVORITE MOVIE");
while((guess != FavoriteMovie) && (guess != "quit")){
    
    guess = prompt("Wrong....pls try again!");
}
if(guess==FavoriteMovie){
    console.log("You got it!");
} else{
    console.log("quit");
}
