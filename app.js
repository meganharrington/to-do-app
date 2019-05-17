function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
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

   toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("class","mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-color-text--yellow");
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.addEventListener('click', function(event){
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      })
   });
}

addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
});
}

window.onload = function(){
    onReady();
}
