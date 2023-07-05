window.addEventListener("load", function () {
    const todoList = document.querySelector(".todoList");
    const todoForm = document.querySelector(".todo-form");

    const storageName = "todoItems";
    const todoItems =
        JSON.parse(localStorage.getItem(storageName) || "[]") || [];

    function init() {
        if (!todoItems || todoItems.length === 0) return;
        todoItems?.forEach((todo) => renderTodo(todo));

        const removeButtons = document.querySelectorAll(".todoRemove");
        removeButtons &&
            removeButtons.forEach((button) =>
                button.addEventListener("click", removeTodo)
            );
    }

    function removeTodo() {
        const value = this.dataset.todo;
        const index = todoItems.indexOf(value);
        todoItems.splice(index, 1);
        const item = this.parentNode;
        item.parentNode.removeChild(item);
        localStorage.setItem(storageName, JSON.stringify(todoItems));
    }

    function renderTodo(todo) {
        const template = `
        <div class="todoItem">
            <div class="showTodo">
                <input type="checkbox" class="showTodoCheck" ${
                    todo.completed ? "checked" : ""
                }/>
                <div class="todoTitle  ${
                    todo.completed ? "todoTitleThrough" : ""
                }">
                    ${todo.name}
                </div>
            </div>
            <button class="todoRemove" data-todo="${todo.name}">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>
        </div>
        `;

        todoList && todoList.insertAdjacentHTML("afterbegin", template);
    }

    function addTodo(todo, completed) {
        const objTodo = {
            id: todoItems.length + 1,
            name: todo,
            completed,
        };
        renderTodo(objTodo);
        todoItems.push(objTodo);
        localStorage.setItem(storageName, JSON.stringify(todoItems));
        todoForm.reset();
    }

    todoForm &&
        todoForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const todoName = this.todo.value;
            const completedName = this.chkCompleted.checked;
            addTodo(todoName, completedName);
        });

    init();
});
