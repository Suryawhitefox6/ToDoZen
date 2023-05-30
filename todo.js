// Get DOM elements
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDeadlineInput = document.getElementById('task-deadline');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const clearCompletedButton = document.getElementById('clear-completed-btn');

// Add event listener for adding a new task
addTaskButton.addEventListener('click', addTask);

// Add event listener for clearing completed tasks
clearCompletedButton.addEventListener('click', clearCompletedTasks);

// Function to add a new task
function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const deadline = taskDeadlineInput.value.trim();

    if (title !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
      <span class="task-title">${title}</span>
      <span class="task-description">${description}</span>
      <span class="task-deadline">${deadline}</span>
      <button class="delete-task-btn">Delete</button>
    `;

        taskItem.addEventListener('click', toggleTaskDetails);

        const deleteButton = taskItem.querySelector('.delete-task-btn');
        deleteButton.addEventListener('click', deleteTask);

        taskList.appendChild(taskItem);

        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        taskDeadlineInput.value = '';

        updateTaskStats();
    }
}

// Function to toggle task details visibility
function toggleTaskDetails(event) {
    const taskItem = event.target.closest('li');
    const taskDescription = taskItem.querySelector('.task-description');
    const taskDeadline = taskItem.querySelector('.task-deadline');

    taskDescription.classList.toggle('hidden');
    taskDeadline.classList.toggle('hidden');
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.closest('li');
    taskItem.remove();

    updateTaskStats();
}

// Function to update task statistics
function updateTaskStats() {
    const tasks = taskList.children;
    const total = tasks.length;
    let completed = 0;

    for (let i = 0; i < total; i++) {
        if (tasks[i].classList.contains('completed')) {
            completed++;
        }
    }

    totalTasks.textContent = total - completed;
}

// Function to clear completed tasks
function clearCompletedTasks() {
    const completedTasks = taskList.getElementsByClassName('completed');

    while (completedTasks.length > 0) {
        completedTasks[0].remove();
    }

    updateTaskStats();
}
// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.closest('li');
    taskItem.classList.toggle('completed');

    updateTaskStats();
}
// Function to clear completed tas

