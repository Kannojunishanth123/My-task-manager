// Get elements from HTML

const taskInput = document.getElementById("taskInput");

const taskPriority = document.getElementById("taskPriority");

const addTaskButton = document.getElementById("addTaskButton");

const taskList = document.getElementById("taskList");


// Get saved tasks from localStorage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Add task when button is clicked

addTaskButton.addEventListener("click", addTask);


// Add a new task

function addTask() {

    const taskName = taskInput.value.trim();

    const priority = taskPriority.value;


    if (taskName === "") {

        alert("Please enter your task");

        return;
    }


    const task = {

        id: Date.now(),

        name: taskName,

        priority: priority,

        completed: false

    };


    tasks.push(task);

    saveTasks();

    displayTasks();


    taskInput.value = "";

}


// Display all tasks

function displayTasks() {

    taskList.innerHTML = "";


    tasks.forEach(function (task) {

        const taskItem = document.createElement("li");


        // Task name

        const taskName = document.createElement("span");

        taskName.textContent = task.name + " - " + task.priority;


        if (task.completed) {

            taskName.style.textDecoration = "line-through";

        }


        // Complete button

        const completeButton = document.createElement("button");

        completeButton.textContent = "Complete";


        completeButton.addEventListener("click", function () {

            task.completed = !task.completed;

            saveTasks();

            displayTasks();

        });


        // Edit button

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";


        editButton.addEventListener("click", function () {

            const newTaskName = prompt("Edit your task", task.name);


            if (newTaskName === null) {

                return;

            }


            if (newTaskName.trim() === "") {

                alert("Task cannot be empty");

                return;

            }


            task.name = newTaskName.trim();

            saveTasks();

            displayTasks();

        });


        // Delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";


        deleteButton.addEventListener("click", function () {

            tasks = tasks.filter(function (item) {

                return item.id !== task.id;

            });


            saveTasks();

            displayTasks();

        });


        // Add everything to the task item

        taskItem.appendChild(taskName);

        taskItem.appendChild(completeButton);

        taskItem.appendChild(editButton);

        taskItem.appendChild(deleteButton);


        // Add task item to the page

        taskList.appendChild(taskItem);

    });

}


// Save tasks in localStorage

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// Display saved tasks when page opens

displayTasks();