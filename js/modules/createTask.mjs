import { updateTasks } from "./updateTasks.mjs";

export function createTask(container, taskArray, text){
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

    // Tailwind styling
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
        updateTasks(container, taskArray);
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

    // Keyboard support
    window.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" && document.activeElement === editInput){
            editInput.style.display = "none";
            taskText.style.display = "block";
            taskEdit.textContent = "Edit";
            taskText.textContent = editInput.value;
        }
    })
}