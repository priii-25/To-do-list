const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
addTaskButton.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        //  task item
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTask);

        // task text
        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = taskText;

        // Append elements
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = "";
    }
}

// Function to toggle task completion
function toggleTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
}
