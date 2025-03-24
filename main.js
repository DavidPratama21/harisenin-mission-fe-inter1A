function addTask(){
    let input = document.getElementById('new-task');
    let taskInput = input.value.trim();
    
    if(!taskInput){return;}

    let li = document.createElement('li');  
    li.innerHTML = `
    <span onclick="toggleComplete(this)">
        ${taskInput}
    </span>
    <button 
        class="bg-red-100 hover:bg-red-500 rounded p-2" 
        onclick="deleteTask(this)"> 
        X 
    </button>
    `;
    document.getElementById('task-list').appendChild(li);
    
    input.value = "";
}

function deleteTask(button){
    button.parentElement.remove();
}

function toggleComplete(task){
    task.classList.toggle('completed')
}