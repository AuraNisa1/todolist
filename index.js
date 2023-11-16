// Mengambil form element
const formElement = document.querySelector('.form-todo');

// Menambahkan form event Listener
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    // Mengambil input elemet di HTML
    const inputElement = document.querySelector('.input-todo');
    // console.log(inputElement.value);

    // Mengambil wrapper todo element sebagai entry point todo item
    const wrapperTodoElement = document.querySelector('.wrapper-todo');

    // Membuat todo item di js
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElement.value;
    // const todoItem = `<li class="todo-item">${inputElement.value}</li>`;

    // Menambahkan todo item ke dalam wrapper todo
    // wrapperTodoElement.innerHTML = todoItem;
    wrapperTodoElement.append(todoItem);

    // Menghapus input value setelah submit
    inputElement.value = '';
});