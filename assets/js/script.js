document.addEventListener("DOMContentLoaded", function(){
    function isInGlobalStorage()
    {
        for(let i = 1; i < 1000; i++)
        {
            let todos = JSON.parse(localStorage.getItem("todo-"+i));

            
            if(todos != null)
            {
                
                let table = document.querySelector("table");
                let tr = document.createElement("tr");
                tr.setAttribute("id", todos.id);
                let table_row = table.appendChild(tr);

                let td_1 = document.createElement("td");
                let td_2 = document.createElement("td");
                let td_3 = document.createElement("td");

                if(todos.imp)
                {
                    td_1.classList.add("todo-border");
                }
                td_1.innerHTML = todos.text;
                td_2.innerHTML = todos.date
                td_3.classList.add("todo-del");
                td_3.innerHTML = "x";
                td_3.setAttribute("onclick","del("+todos.id+");");

                table_row.appendChild(td_1);
                table_row.appendChild(td_2);
                table_row.appendChild(td_3);
            }
            
        }
        
    }
    isInGlobalStorage();
});

function submit()
{
    let text = document.querySelector(".input");
    if(text.value == "")
    {
        return
    }
    let checkbox = document.querySelector(".checkbox");
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let id = parseInt(localStorage.getItem('id') ?? '0');
    localStorage.setItem('id', (id + 1).toString());

    //Set item in local storage

    let todo = {
        imp: checkbox.checked,
        text: text.value,
        date: today.toLocaleDateString(),
        id:JSON.parse(localStorage.getItem("id"))
    }
    localStorage.setItem("todo-"+JSON.parse(localStorage.getItem("id")), JSON.stringify(todo));

    let table = document.querySelector("table");
    let tr = document.createElement("tr");
    tr.setAttribute("id", id);
    let table_row = table.appendChild(tr);

    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");

    if(checkbox.checked)
    {
        td_1.classList.add("todo-border");
    }
    td_1.innerHTML = text.value;
    td_2.innerHTML = today.toLocaleDateString();
    td_3.classList.add("todo-del");
    td_3.innerHTML = "x";
    td_3.setAttribute("onclick","del("+id+");");

    table_row.appendChild(td_1);
    table_row.appendChild(td_2);
    table_row.appendChild(td_3);

    resetInput();
}
function resetInput()
{
    document.querySelector(".input").value = "";
    document.querySelector(".checkbox").checked = false;
}

// Get the input for being able to press enter to add
var input = document.querySelector(".input");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        submit();
    }
});
function del(id)
{
    let tr = document.getElementById(id);
    let q = confirm("Er du sikker på at du vil slette denne?")
    if(q)
    {
        tr.parentNode.removeChild(tr);
        localStorage.removeItem('todo-'+id);
    }
    
}
function delAll()
{
    let q = confirm("Er du sikker på at du vil slette alle?")
    if(q)
    {
        localStorage.clear();
        window.location.reload();
    }
}