import { updateTasks } from "./updateTasks.mjs";

export async function fetchTasks(container, taskArray){
    let response = await fetch("http://localhost:2345/");
    let data = await response.json();
    console.log(data)
    data.forEach(data => {
        taskArray.push(data.text);
    })
    updateTasks(container, taskArray);
}