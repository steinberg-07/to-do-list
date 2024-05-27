const btn = document.querySelector("#enter");
const entry = document.querySelector("#toDo");
const toDoList = document.querySelector(".ul")
btn.addEventListener("click",submit);



function submit(e){
    
    e.preventDefault();
    if(entry.value != "") toDoList.classList.add ("list");
    // if(toDoList.firstElementChild != "[object Text]"){
    //     toDoList.classList.add ("list");
    //     console.log("th");
    // }
    if(entry.value != ""){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(entry.value));
        toDoList.appendChild(li);
        li.classList.add("listItems");
        const btn = document.createElement("button");
        btn.textContent = "x";
 
        btn.classList.add("xbtn");     
        li.appendChild(btn);
        btn.addEventListener('click', deleter);
        function deleter(e){
            toDoList.removeChild(li); 
          
            if(toDoList.firstElementChild == null){
                toDoList.classList.remove ("list");
            } 
        }
    }
    entry.value = "";

}



