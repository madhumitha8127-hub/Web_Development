const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");


// Add task

function addTask() {

    const taskText = taskInput.value.trim();

    // Check if input is empty

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create list item

    const listItem = document.createElement("li");

    listItem.className = "task-item";


    // Create task text

    const text = document.createElement("span");

    text.className = "task-text";

    text.textContent = taskText;


    // Create buttons container

    const buttons = document.createElement("div");

    buttons.className = "task-buttons";


    // Complete button

    const completeButton = document.createElement("button");

    completeButton.textContent = "Done";

    completeButton.className = "complete-button";


    completeButton.addEventListener("click", function () {

        text.classList.toggle("completed");

    });


    // Delete button

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-button";


    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateTaskCount();

    });


    // Add buttons

    buttons.appendChild(completeButton);

    buttons.appendChild(deleteButton);


    // Add text and buttons to list item

    listItem.appendChild(text);

    listItem.appendChild(buttons);


    // Add task to list

    taskList.appendChild(listItem);


    // Clear input

    taskInput.value = "";

    taskInput.focus();


    // Update count

    updateTaskCount();
}


// Update task count

function updateTaskCount() {

    const totalTasks = taskList.children.length;

    taskCount.textContent =
        "Total Tasks: " + totalTasks;
}


// Add button click

addButton.addEventListener("click", addTask);


// Press Enter to add task

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});
