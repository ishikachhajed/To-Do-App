let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete"); 
    deleteBtn.classList.add("delete");
       
    item.appendChild(deleteBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click",function(event) {;
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});




/*
let delbtn = document.querySelectorAll(".delete");
for (delbtn of delbtn) {
    delbtn.addEventListener("click", function () {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
*/
