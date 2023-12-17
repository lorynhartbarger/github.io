  const toDoList = [{
    task:'',
    dueDate:'',
    time:''
    }]

  function renderToDoList(){
    let toDoListHTML = '';

    toDoList.forEach((toDoObject, index) => {
      const {task, dueDate, time} = toDoObject;
      const HTML = `
        <div>${task}</div>  
        <div>${dueDate}</div>  
        <div>${time}</div>  
        <button class="delete-button js-delete-button">Delete</button>
      `;
      toDoListHTML += HTML;
    });
  
    document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index,1);
        renderToDoList();
      });
    });
  }

  document.querySelector('.js-add-button').addEventListener('click', () => {
    addTask();
  });

  function addTask(){
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
    inputElement.value='';
    renderToDoList();
  }