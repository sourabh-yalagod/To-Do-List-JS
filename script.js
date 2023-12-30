
const tasksContainer = document.getElementById('tasks');
const newTaskInput = document.getElementById('newTask');
const errorMsg = document.querySelector('.errorMsg');
console.log(errorMsg);

function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText === '') {
    // alert('Please enter a task.');
    newTaskInput.style.border='1px solid red';
    errorMsg.innerText='can not be empty';
    return;
  }
  newTaskInput.style.border='1px solid gray';
  errorMsg.innerText='';
  
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const division = document.createElement('p');
  division.className = 'division';

  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';


  taskItem.appendChild(division);

  division.appendChild(checkbox);
  division.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);

  tasksContainer.appendChild(taskItem);

  newTaskInput.value = '';
}

  deleteButton.onclick = function () {
    tasksContainer.removeChild(taskItem);
  };

// Delete Completed Tasks Function
function deleteCompletedTasks() {
  const completedTasks = document.querySelectorAll('.task-item input[type="checkbox"]:checked');

  completedTasks.forEach((task) => {
    const taskItem = task.parentElement;
    tasksContainer.removeChild(taskItem);
  });
}
