let taskInput = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-task-btn");
let taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", () => addTask());
taskInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTaskBtn.click();
    }
});

function addTask() {
    if (taskInput.value != 0) {
        let taskItem = document.createElement("li");
        let taskSpan = document.createElement("span");
        taskSpan.className = "task-span"
        taskSpan.appendChild(document.createTextNode(taskInput.value));
        taskItem.appendChild(taskSpan);
        taskList.appendChild(taskItem);
        taskInput.value = "";

        let dltTaskBtn = document.createElement("button");
        dltTaskBtn.innerText = "Elimina";
        dltTaskBtn.id = "dlt-task-btn";
        taskItem.appendChild(dltTaskBtn);

        dltTaskBtn.addEventListener("click", () => taskItem.remove());
        taskSpan.addEventListener("click", () => taskSpan.classList.toggle("checked"));
    } else if (true) {

    }
};




