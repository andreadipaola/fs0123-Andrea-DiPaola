const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    let clicks = document.getElementsByTagName("input").length;
    // var item = prompt("Please enter a goal", " ")
    let item = input.value;

    if (item == null) {
        return cheese
    }
    clicks++;
    itemCountSpan.innerHTML = clicks;
    list.innerHTML = list.innerHTML + "<li id = 'clicks'> <input type = checkbox onclick = 'checker()' class = 'todo-checkbox'>Task: " + item +
        "</input>" + "<button class = 'todo-delete' value = clicks onclick = 'deleteToDo(this.parentElement)'>Delete</button></li>"

}

function checker() {
    let Total = 0;
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        if (!document.getElementsByTagName("input")[i].checked) {
            Total++;
            uncheckedCountSpan.innerHTML = Total;
        }
    }
}

document.querySelectorAll('#clicks').forEach(item => {

    item.addEventListener('#clicks', event => {
      change()
})});


function change() {

document.querySelectorAll("#clicks").forEach(item => {
 item.parentNode.style = "text-decoration: line-through;"

})};


function deleteToDo(elem) {

    list.removeChild(elem);

}