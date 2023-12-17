const toDoList = [];

function renderToDoList() {
  const toDoListContainer = document.querySelector('.js-to-do-list');
  toDoListContainer.innerHTML = ''; // Clear existing content

  toDoList.forEach((toDoObject, index) => {
    const { task, dueDate, time } = toDoObject;
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `${task} ${dueDate} ${time}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button', 'js-delete-button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      toDoList.splice(index, 1);
      renderToDoList();
    });

    taskElement.appendChild(deleteButton);
    toDoListContainer.appendChild(taskElement);
  });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTask();
});

function addTask() {
  const inputElement = document.querySelector('.js-taskname-input');
  const task = inputElement.value;
  const dueDateInput = document.querySelector('.js-duedate-input');
  const dueDate = dueDateInput.value;
  const timeInput = document.querySelector('.js-time-input');
  const time = timeInput.value;

  toDoList.push({
    task,
    dueDate,
    time
  });
  inputElement.value = '';
  renderToDoList();
}
