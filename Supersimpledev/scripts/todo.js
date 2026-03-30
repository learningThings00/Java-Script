const todoList = JSON.parse(localStorage.getItem('todoLog')) || [];

renderTodoList();//render means to display something on the page

function addTodo() {
  const inputElement = document.querySelector('.js-todo');

  todoList.push(inputElement.value);
  localStorage.setItem('todoLog', JSON.stringify(todoList));
  renderTodoList();
  inputElement.value = '';
}

function addTodoKeydown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

//the technique used inside the fn is called generating HTML
function renderTodoList() {
  let todoListHTML = '';
for (i = 0; i < todoList.length; i++) {
 const todoValue = todoList[i];
 const todoHTML = `<p>${todoValue}</p>`;
  todoListHTML += todoHTML;
}
 document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}
//reset i added not working also broke my previous code
function del() {
  todoList.pop();
  localStorage.setItem('todoLog', JSON.stringify(todoList));
}
