class TodoList {
    constructor(){
        this.tasks = this.caricaTask();
        this.generaTask();
        console.log("tasks",this.tasks);
    }

    aggiungiTask(task) {
        this.task.push(task);
        this.generaNuovoTask(task);
        console.log("tasks", this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };
        
    consludiTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log(this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };

    caricaTask() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        return tasks;
    };

    generaNuovoTask(task) {
        const todo = document.getElementById("todo");
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(task));
        todo.appendChild(p);
        p.addEventListener("click", (e) => {
            this.concludiTask(task)
            e.srcElement.remove();
        });
    };

    generaTask() {
        this.tasks.forEach((task) => {
            const todo = document.getElementById("todo");
        })
        const todo = document.getElementById("todo");
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(task));
        todo.appendChild(p);
        p.addEventListener("click", (e) => {
            this.concludiTask(task)
            e.srcElement.remove();
        });
    };



document.addEventListener("DOMContentLoaded", ()=>{
    const newTaskBtn = document.getElementById("new-task-btn");
    const clearBtn = document.getElementById("clear-btn");
    const input = document.getElementById("new-task");

    const todoList = new TodoList();

    newTaskBtn.addEventListener("click", ()=>{
        console.log("nuovo task", input.value);
        todoList.aggiungiTask(input.value);
    });

    clearBtn.addEventListener("click", ()=>{
        console.log("pulisci task");
    });

    input.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            console.log("ho premuto invio");
            input.value = ""
        }
    })



});