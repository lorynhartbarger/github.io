const todoList = [{
  name: 'dishes',
  dueDate:'2023-12-15'
}];
renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++) {
    const todoOblject = todoList[i];
    //const name = todoOblject.name;
    //const dueDate = todoOblject.dueDate;
    const { name, dueDate } = todoOblject;
    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};
function addTodo(){
  const inputElement =
  document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);

  const dateInputElement = 
  document.querySelector('js-due-date-input');
  const dueDate = inputElement.value;
  todoList.push(dueDate);

  inputElement.value = '';
renderTodoList();
};

