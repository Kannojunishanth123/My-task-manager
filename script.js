const taskInput=
document.getElementById("taskInput");
const taskPriority=
document.getElementsById("taskPriority");
const addTaskButton=
document.getElementById("add Taskbutton");
const tasklist=
document.getElementById("tasklist");

addTaskButton.addEventListener("click",addTask);

function addTask(){
    const taskname= taskInput.value;
    const priority = taskPriority.value;


    if(taskname.trim()=="")
        alert("please enter your task");
    return;
}
const task=
document.createElement("li");
task.textContent=taskname;

tasklist.appendChild(task);

taskInput.value="";