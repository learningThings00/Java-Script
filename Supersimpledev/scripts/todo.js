let todoList =  JSON.parse(localStorage.getItem('todoLog')) ||  [];

renderTodoList();//render means to display something on the page

function addTodo() {
  const nameInputElement = document.querySelector('.js-todo');
  const name = nameInputElement.value;

  const dateInputElement = document.querySelector('.js-todo-date');
  const date = dateInputElement.value;

  const errorMessage = document.querySelector('.js-error-display');

  if (name && date) {

    todoList.push({
    //shorthand for this is we can use single name instead of name: name(variable). called shorthand property syntax
    // name: name,
    // date: date
    name,
    date
  });

  updateLocalStorage();

  renderTodoList();

  errorMessage.innerHTML = '';

  nameInputElement.value = '';
  dateInputElement.value = '';

  } else {
    if (!name && !date) {
      errorMessage.innerHTML = 'Enter Todo and date first';
    } else if (!name) {
      errorMessage.innerHTML = 'Enter Todo first';
    } else {
      errorMessage.innerHTML = 'Enter date first';
    }
  }
  
}

function addTodoKeydown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

//the technique used inside the fn is called generating HTML
function renderTodoList() {
  let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
 const todoObject = todoList[i];
//  const name = todoObject.name;
//  const date = todoObject.date;
 //instead of the code obove we can write it as below - called destructuring
 const { name, date } = todoObject;

 //we used div instead of p because div is easier to style.
 const todoHTML = `
 <div>${name}</div>
 <div>${date}</div>
 <button onclick="
 todoList.splice(${i}, 1);
 renderTodoList();
 updateLocalStorage();
 " class="delete-button">Delete</button>
 `;
  todoListHTML += todoHTML;
}
 document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}

function clearAll() {
  const warning = document.querySelector('.js-clear-button');

  if (warning.innerText === 'Clear All') {
    warning.innerText = 'Are you sure';
    setTimeout(() => {
    warning.innerText = 'Clear All';
    }, 3000);
  } else {
  todoList = [];
  localStorage.removeItem('todoLog');
  renderTodoList();
  warning.innerText = 'Clear All';
  }
}

function updateLocalStorage() {
  localStorage.setItem('todoLog', JSON.stringify(todoList));
}

