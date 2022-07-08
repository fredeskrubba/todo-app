const taskInput = document.querySelector("#input-field");
const taskAddButton = document.querySelector("#add-task-button");
const container = document.querySelector("#list");

const taskArray = [];

function updateTasks(){
    container.innerHTML = "";
    taskArray.forEach(task => {
        container.appendChild(task)
    });
}

function removeTask(){

}
function addTask(text){
    const newTask = document.createElement("div");
    const taskGrid = document.createElement("div");
    
    const taskText = document.createElement("p");
    taskText.textContent = text;
    taskText.classList.add("mr-auto")
    
    const taskEdit = document.createElement("p");
    taskEdit.textContent = "Edit";
    taskEdit.classList.add("cursor-pointer");
    
    const taskRemove = document.createElement("p");
    taskRemove.textContent = "Delete";
    taskRemove.classList.add("cursor-pointer");
    
    newTask.classList.add("bg-gray-100", "w-1/2", "p-6", "text-lg", "rounded-lg", "my-5");
    taskGrid.classList.add("container", "flex", "grid-cols-3", "gap-5");
    
    newTask.appendChild(taskGrid);
    taskGrid.appendChild(taskText);
    taskGrid.appendChild(taskEdit);
    taskGrid.appendChild(taskRemove);
    taskArray.push(newTask);
    updateTasks();
    taskRemove.addEventListener("click", (e)=>{
        taskArray.splice(taskArray.indexOf(e.target.parentElement.parentElement), 1);
        updateTasks();
    })
}

taskAddButton.addEventListener("click", ()=>{
    addTask(taskInput.value);
    taskInput.value = "";
})

