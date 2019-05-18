let id = 0;
let toDos = [];
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');

function onReady() {
   if(localStorage.getItem("toDos") != null){
     toDos = JSON.parse(localStorage.getItem("toDos"));
     id = toDos[toDos.length-1].id+1;
   }
   renderTheUI();

function createNewToDo() {
    if (!newToDoText.value) { return; }
    toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id
    });
    id++
    newToDoText.value = '';
    renderTheUI();
}

function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    setLocalStorage();
    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        const deleteButton = document.createElement('button');
        checkbox.type = "checkbox";
        checkbox.setAttribute("class", "checkbox");
        newLi.textContent = toDo.title;
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("class","mdl-button mdl-js-button mdl-button--raised mdl-color--blue mdl-color-text--yellow");
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(event){
        toDos = toDos.filter(function(item){
            return item.id !== toDo.id;
        })
        renderTheUI();
        })
        checkbox.addEventListener("click",function(){
        toDo.complete = checkbox.checked;
        setLocalStorage();
        })
    });

}

addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
});

function setLocalStorage(){
    var toDosString = JSON.stringify(toDos);
    localStorage.setItem("toDos",toDosString);
}

}

window.onload = function(){
     onReady();
}
