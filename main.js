document.addEventListener("DOMContentLoaded", loadTasks)

function addTask(){
    let input = document.getElementById('new-task');
    let taskInput = input.value.trim();
    
    if(!taskInput){return;}

    let li = document.createElement('li')
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskInput}</span>
        <button 
            class="bg-slate-500 rounded p-2 font-bold hover:bg-slate-900 hover:text-white"
            onclick="deleteTask(this, '${taskInput}')"> 
            X 
        </button>`;
    document.getElementById('task-list').appendChild(li);
    saveTask(taskInput)
    input.value = "";
}

function deleteTask(button, taskInput){
    let tasks = getTaskFromStorage();
    tasks = tasks.filter((task) => task.text !== taskInput)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    button.parentElement.remove();

}

function toggleComplete(task){
    task.classList.toggle('completed')
    updateTask(task)
}

function saveTask (taskInput){
    let tasks = getTaskFromStorage();
    tasks.push({text: taskInput, completed: false});
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Task', tasks)
}

function getTaskFromStorage (){
    let tasks = localStorage.getItem('tasks');
    try{
        tasks = JSON.parse(tasks) || []
    }catch(e){
        tasks = [];
    }
    return tasks;
}

function loadTasks (){
    let tasks = getTaskFromStorage();
    tasks.forEach(task => {
        let li = document.createElement('li')
        li.innerHTML = `
        <span class="${task.completed ? ' completed' : ''}"
            onclick="toggleComplete(this)">${task.text}</span>
        <button 
            class="bg-slate-500 rounded p-2 font-bold 
                hover:bg-slate-900 hover:text-white"
            onclick="deleteTask(this, '${task.text}')"> 
            X 
        </button>
        `;
        document.getElementById('task-list').appendChild(li);
    })
}

function updateTask(taskInput){
    console.log('update task: ' + taskInput.innerHTML);
    let tasks = getTaskFromStorage();
    tasks.forEach(task => {
        if(task.text === taskInput.innerHTML){
            task.completed = !task.completed;
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Task', tasks)
}
