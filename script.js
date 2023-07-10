// Get DOM elements
const nameInput = document.getElementById('name-input');
const addNameBtn = document.getElementById('add-name-btn');
const nameSection = document.getElementById('name-section');
const studentName = document.getElementById('student-name');
const editNameBtn = document.getElementById('edit-name-btn');
const taskInputSection = document.getElementById('task-input-section');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// State variables.
let name = '';
let tasks = [];

// Event listeners
addNameBtn.addEventListener('click', addName);
editNameBtn.addEventListener('click', editName);
addTaskBtn.addEventListener('click', addTask);

// Functions
function addName() {
  name = nameInput.value.trim();
  if (name) {
    studentName.textContent = name;
    nameInput.value = '';
    nameInput.disabled = true;
    addNameBtn.disabled = true;
    nameSection.classList.remove('hidden');
    taskInputSection.classList.remove('hidden');
  }
}

function editName() {
  nameInput.value = name;
  nameInput.disabled = false;
  addNameBtn.disabled = false;
  nameSection.classList.add('hidden');
  taskInputSection.classList.add('hidden');
  tasks = [];
  renderTasks();
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskItem.appendChild(taskText);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(index));
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
  });
}