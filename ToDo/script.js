const form = document.getElementById("form");
const input = document.getElementById("input");
const todoList = document.getElementById("todos");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(){
    let todoText = input.value;
    
    if(todoText){
        const todoItem = document.createElement("li");
        todoItem.innerText = todoText;
        
        todoItem.addEventListener("click",() => {
            todoItem.classList.toggle("completed");
        })
        
        todoItem.addEventListener("contextmenu",(e) => {
            e.preventDefault();
            todoItem.remove();
        })

        todoList.appendChild(todoItem);
        input.value = "";
    }
}