const taskInput = document.querySelector("#input-field");
const taskAddButton = document.querySelector("#add-task-button");
const container = document.querySelector("#list");

async function getTasks(){
    let response = await fetch("http://localhost:2345/");
    let data = await response.json();
    console.log(data)
    data.forEach(data => {
        taskArray.push(data.text)
    })
    updateTasks()
}

let taskArray = [];


function updateTasks(){
    container.innerHTML = "";
    taskArray.forEach(task => {
        createTask(task)
    });
}

function createTask(text){
    const newTask = document.createElement("div");
    const taskGrid = document.createElement("div");
    const taskText = document.createElement("p");
    taskText.textContent = text;

    const textCont = document.createElement("div");
    textCont.classList.add("mr-auto");

    const editInput = document.createElement("input");
    editInput.style.display = "none";


    const taskEdit = document.createElement("p");
    taskEdit.textContent = "Edit";
    taskEdit.classList.add("cursor-pointer");

    const taskRemove = document.createElement("p");
    taskRemove.textContent = "Delete";
    taskRemove.classList.add("cursor-pointer");

    newTask.classList.add("bg-gray-100", "w-1/2", "p-6", "text-lg", "rounded-lg", "my-5");
    taskGrid.classList.add("container", "flex", "grid-cols-3", "gap-5");

    newTask.appendChild(taskGrid);

    
    textCont.appendChild(taskText);
    textCont.appendChild(editInput);
    taskGrid.appendChild(textCont);
    taskGrid.appendChild(taskEdit);
    taskGrid.appendChild(taskRemove);

    container.appendChild(newTask);

    taskRemove.addEventListener("click", (e)=>{
        taskArray.splice(taskArray.indexOf(e.target.parentElement.firstChild.querySelector("p").textContent), 1);
        updateTasks();
    });
    taskEdit.addEventListener("click", ()=>{
        if (taskEdit.textContent === "Edit"){
            editInput.style.display = "block";
            editInput.value = taskText.textContent;
            taskEdit.textContent = "Confirm";
            taskText.style.display = "none";
            editInput.focus();
        } else {
            editInput.style.display = "none";
            taskText.style.display = "block";
            taskEdit.textContent = "Edit";
            taskText.textContent = editInput.value;
        }
    })
    window.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" && document.activeElement === editInput){
            editInput.style.display = "none";
            taskText.style.display = "block";
            taskEdit.textContent = "Edit";
            taskText.textContent = editInput.value;
        }
    })

}

taskAddButton.addEventListener("click", ()=>{
    taskArray.push(taskInput.value)
    taskInput.value = "";
    updateTasks();
})

window.addEventListener("keydown", (e)=>{
    if (e.key === "Enter" && taskInput.value !== ""){
        taskArray.push(taskInput.value);
        updateTasks();
        taskInput.value = "";
    }
})

getTasks();