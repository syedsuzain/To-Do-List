const form = document.querySelector('form');
const newTask = document.querySelector('#new-task');
const dueDate = document.querySelector('#due-date');
const category = document.querySelector('#category');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = newTask.value;
  const taskDueDate = dueDate.value;
  const taskCategory = category.value;
  if (taskName.trim()) {
    addTask(taskName, taskDueDate, taskCategory);
    newTask.value = '';
    dueDate.value = '';
    category.value = '';
  }
});

function addTask(taskName, taskDueDate, taskCategory) {
  const task = document.createElement('li');
  task.innerHTML = `
    <span class="task-name">${taskName}</span>
    <span class="due-date">${taskDueDate}</span>
    <span class="category">${taskCategory}</span>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(task);

  const completeBtn = task.querySelector('.complete-btn');
  const deleteBtn = task.querySelector('.delete-btn');

  completeBtn.addEventListener('click', () => {
    task.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    task.remove();
  });
}
