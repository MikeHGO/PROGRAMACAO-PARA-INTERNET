// unchecked
// <i class="fa fa-circle-o" aria-hidden="true"></i>

// checked
// <i class="fa fa-check-circle-o" aria-hidden="true"></i>

// trash box
// <i class="far fa-trash-alt"></i>

// Lista, input text, id

const ulist = document.getElementById("ulist");
const input = document.getElementById("input");
let id = 0;

// icones
const check = "fa-circle-o";
const uncheck = "fa-check-circle-o";
const line_through = "lineThrough";

// adicionar tarefa
function addTODO(toDo, id) {

    const item = `<li class="item">
    <i class="fa ${check}" job="complete" id="${id}"></i>
    <span class="text">${toDo}</span>
    <i class="far fa-trash-alt" job="remove"></i>
    </li>
    `;
    ulist.insertAdjacentHTML("beforeend", item);
}

// Event listener, click do mouse ou tecla ENTER

document.addEventListener("keyup", function(event){
    //Fazer: checar input placeholder onfocus..
    if(event.keyCode == 13) {
        const toDo = input.value;
        if (toDo){
            addTODO(toDo, id);
            id++;
            input.value = "";
        }
    }
});

document.getElementById("plus_icon").onclick = function() {
    const toDo = input.value;
    if (toDo){
        addTODO(toDo, id);
        id++;
        input.value = "";
    }
}

// Marcar tarefa
function completeToDo(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(line_through);
}

// Remover tarefa
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}

// Relacionar icone com funcao

ulist.addEventListener("click", function(event){
    // elemento clicado
    const element = event.target;
    const elementJob = element.attributes.job.value; // complete ou remove

    if(elementJob == "complete") {
        completeToDo(element);
    } else if(elementJob == "remove") {
        removeToDo(element);
    }
});