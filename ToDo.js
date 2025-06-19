let ToDo =[];
let request = prompt("Enter your request");

while(true){

    if(request == "quit"){
        console.log("Goodbye");
        break;
    }
    if(request == "list"){
        console.log("--------------");
        for(let i=0;i<ToDo.length;i++){
            console.log(i,ToDo[i]);
        }
        console.log("--------------");
    }
    else if(request == "add"){
        let task = prompt("Please enter the task you want to add");
        ToDo.push(task);
        console.log("Task added");
    }  else if(request == "delete"){
        let idx = prompt("Please enter the task you want to delete");
        ToDo.splice(idx,1);
        console.log("Task deleted");
    } else {
        console.log("Invalid request");
    }
    request = prompt("please enter your request");
}