const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', function() { 
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    taskItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation();
        taskItem.remove();
    }); 
    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
    taskItem.addEventListener('click', function() {
        taskItem.style.textDecoration = 'line-through';
});
});
