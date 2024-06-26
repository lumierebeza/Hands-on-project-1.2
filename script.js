// Declare variables
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

// Functions
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button class="remove">Remove</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function handleTaskClick(event) {
    if (event.target.classList.contains('remove')) {
        removeTask(event.target.parentElement);
    } else {
        toggleTaskComplete(event.target);
    }
}

function removeTask(taskElement) {
    taskList.removeChild(taskElement);
}

function toggleTaskComplete(taskElement) {
    if (!taskElement.classList.contains('remove')) {
        taskElement.classList.toggle('completed');
    }
}
