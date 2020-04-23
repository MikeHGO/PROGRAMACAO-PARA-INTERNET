const container = document.getElementById("container");
const DISPLAY = "none";

// get element
container.addEventListener("click", function(event){
    const element = event.target;
    if (element.hasAttribute("job") == false) {
        return;
    }
    const elementJob = element.attributes.job.value;    
    if(elementJob == "editavel") {        
        input_spawn(element);
	element.parentNode.querySelector(".input").focus();
    } else if (elementJob == "btn") {
        escrever(element);
    }
});

// criar input e btn
function input_spawn(element) {
    const item = `
    <input class="input" type="text" placeholder="Novo texto">
    <button class="btn" type="button" job="btn">Enviar</button>
    `
    element.innerHTML = "";
    element.insertAdjacentHTML("beforeend", item);
}

// atualizar campo

function escrever(element) {
    const input_box = element.parentNode.querySelector(".input");
    const texto = input_box.value;
    if (texto == "") {
        return;
    }
    element.parentNode.insertAdjacentHTML("beforeend",texto);
    input_box.remove();
    element.remove();
}