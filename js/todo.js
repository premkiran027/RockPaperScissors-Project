let todoList = [];
renderList();


function renderList() {
    let todoListHTML = '';
    todoList.forEach((todoObj) =>  {        
        const {name, dueDate} = todoObj;
        let html = `<div>${name}</div>
        <div>${dueDate}</div>
        <button class="deleteBtn delete-btn">Delete</button>`;
        todoListHTML += html;
    });
    // for (let i = 0; i < todoList.length; i++){
    //     const todoObj = todoList[i];
    //     const {name, dueDate} = todoObj;
    //     let html = `<p>${name} ${dueDate}<button class="deleteBtn" onclick="todoList.splice(${i}, 1); renderList();">Delete</button></p>`;
    //     todoListHTML += html;
    // }
    document.querySelector('.tolist').innerHTML = todoListHTML;
    document.querySelectorAll('.delete-btn').forEach((deleteBtn, index)=>{
        deleteBtn.addEventListener('click', ()=>{todoList.splice(index, 1); renderList();});
    });
}
document.querySelector('.add-btn').addEventListener('click', () => {addTodo();});

function addTodo() {
    let inputElem = document.querySelector('.input-text');
    let name = inputElem.value;
    let dueDateElem = document.querySelector('.dueDate');
    let dueDate = dueDateElem.value;
    todoList.push({name, dueDate} );
    inputElem.value = '';
    renderList();
}