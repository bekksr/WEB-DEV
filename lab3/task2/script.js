const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const TaskText = input.value.trim();

    if(TaskText != ""){
        addTaskText(TaskText);
        input.value = '';
    }

    console.log(TaskText);


});

function addTaskText(text){
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    checkbox.addEventListener( 'change', function() {
        if(checkbox.checked){
            li.classList.add('completed');
        } else{
            li.classList.remove('completed');
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
    
}