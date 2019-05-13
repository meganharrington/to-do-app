function onReady(){
    var addToDoForm = document.querySelector("#addToDoForm");
    var newToDoText = document.querySelector("#newToDoText");
    var toDoList = document.querySelector("#toDoList");

    addToDoForm.addEventListener("submit", function(event){
        //Prevent it from taking default action ie reloading page
        event.preventDefault();
        //Create New li for new To Do
        var li = document.createElement("li");
        //Create checkbox as input
        var check = document.createElement("input");
        check.type = "checkbox";
        //Create delete button
        var del = document.createElement("button");
        var delvalue = document.createTextNode("Delete");
        del.appendChild(delvalue);
        del.setAttribute('class',"deleteThis");
        //Set text of li to text box's text
        var value = document.createTextNode(newToDoText.value);
        //Add check box, delete button, and text to li
        li.appendChild(value);
        li.appendChild(check);
        li.appendChild(del);
        //Add li to ul
        toDoList.appendChild(li);
        //Reset text to empty
        newToDoText.value = "";

        var deleteButton = document.querySelectorAll(".deleteThis");
        var lis = document.querySelectorAll("li");

        deleteButton[deleteButton.length-1].addEventListener("click", function(){
            toDoList.removeChild(lis[lis.length-1]);
        })
    })
}

window.onload = function(){
    onReady();
};
