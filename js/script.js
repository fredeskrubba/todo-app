// Imports
import { updateTasks } from "./modules/updateTasks.mjs";
import { fetchTasks } from "./modules/fetch.mjs";

// Variables
const taskInput = document.querySelector("#input-field");
const taskAddButton = document.querySelector("#add-task-button");
const container = document.querySelector("#list");

let taskArray = [];


// Add task + keyboard support
taskAddButton.addEventListener("click", ()=>{
    taskArray.push(taskInput.value);
    taskInput.value = "";
    updateTasks(container, taskArray);
})

window.addEventListener("keydown", (e)=>{
    if (e.key === "Enter" && taskInput.value !== ""){
        taskArray.push(taskInput.value);
        updateTasks(container, taskArray);
        taskInput.value = "";
    }
})

// Get database items
fetchTasks(container, taskArray);