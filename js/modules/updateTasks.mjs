import { createTask } from "./createTask.mjs";

export function updateTasks(container, taskArray){
    container.innerHTML = "";
    taskArray.forEach(task => {
        createTask(container, taskArray, task)
    });
}
