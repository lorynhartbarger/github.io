

  const todoList = [{
    name: '',
    dueDate:''
  }];
  
  renderTodoList();

  function renderTodoList() {
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoOblject.name;
      //const dueDate = todoOblject.dueDate;
      const {name, dueDate} = todoObject;
      const html = `
      <div>${name} </div>
      <div>${dueDate}</div>
      <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        " class="js-delete">Delete</button>
      `;
      todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  };

  function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    
    todoList.push({
      name,
      dueDate
    });

    inputElement.value = '';
  renderTodoList();
  };

  function hideDeleteButton(){
    const deleteButton = document.querySelector('.js-delete');
    deleteButton.style.display = 'none';    
  };

