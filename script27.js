const tasks = [];

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = { title, description, dueDate };
    tasks.push(task);

    displayTasks();
});

function displayTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const title = document.createElement('h3');
        title.textContent = task.title;

        const description = document.createElement('p');
        description.textContent = task.description;

        const dueDate = document.createElement('small');
        dueDate.textContent = `Due Date: ${task.dueDate}`;

        taskItem.appendChild(title);
        taskItem.appendChild(description);
        taskItem.appendChild(dueDate);

        taskContainer.appendChild(taskItem);
    });
}

// Inside the forEach loop of displayTasks function
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.addEventListener('click', () => {
    // Populate form with task details
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
});

taskItem.appendChild(editButton);

function updateTask(index, updatedTask) {
    tasks[index] = updatedTask; // Update the task object
    displayTasks(); // Refresh the task list
}

// Inside the forEach loop of displayTasks function
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1); // Remove the task from the array
        displayTasks(); // Refresh the task list
    }
});

taskItem.appendChild(deleteButton);
