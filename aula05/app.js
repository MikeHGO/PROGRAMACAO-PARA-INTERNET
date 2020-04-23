// Alterando o conteúdo de um elemento da DOM
document.getElementById("b1").onclick = function () {
    document.getElementById("p1").innerHTML = "Ciência da Computação";
}

let paragrafos = document.getElementsByTagName("p");

document.getElementById("b2").onclick = function(){
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = "red";
    }
}

console.log(paragrafos);

// Como encontrar elementos da DOM
// document.getElementById("")
// document.getElementsByTagName("")
// document.getElementsByClassName("")


// Alterando elementos HTML

// Propriedades
// element.innerHTML --> altera o conteúdo HTML de um elemento
// element.attribute --> altera o atributo de um elemento
// element.style.property --> altera a propriedade CSS de um elemento

// Método
// element.setAttribute(attribute, value) --> altera um atributo de um elemento

document.getElementById("img1").onclick = function() {
    document.getElementById("img1").setAttribute("src", "https://live.staticflickr.com/917/28599761247_ff6a89a5f9_b.jpg");
}

document.getElementById("img1").onmouseover = function() {
    document.getElementById("img1").setAttribute("src", "https://live.staticflickr.com/917/28599761247_ff6a89a5f9_b.jpg");
}

document.getElementById("img1").onmouseleave = function() {
    document.getElementById("img1").setAttribute("src", "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg");
}

// Pegando o conteúdo de um input e escrevendo no parágrafo

document.getElementById("div1").onclick = function(){
    let txt = document.getElementById("inputtext1").value;
    document.getElementById("p5").innerHTML = txt;
}

// Alterando o value de um input

document.getElementById("inputtext1").onkeyup = function ghost(){
    let length = document.getElementById("inputtext1").value.length;
    tam = length;
    let msg = "Você acha que você pode digitar o que você quer aqui? Eu digito o que eu quiser nessa bagaça!";
    // document.getElementById("inputtext1").value = msg;
    document.getElementById("inputtext1").value = msg.slice(0, tam);
}

// Função que pega altura e largura e escreve em um <p>
function windowsize() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;

    document.getElementById("p5").innerHTML = "Dimensões: " + w +" x " + h + ".";

}

// Vinculando a função a um listener
window.addEventListener("resize", windowsize);
windowsize();

// Criar elementos
// Remove child
// Append child
// Replace child

// Passos para criar um novo elemento
// 1) Criar o elemento filho
// 2) Criar o conteúdo do elemento filho
// 3) Vincular o ceonteúdo ao elemento filho
// 4) Vincular o elemento filho ao elemento pai

let cursos = ["Processos Quimicos", "ADS", "Agroindustria", "ADM", "Eletro"];

document.getElementById("b3").onclick = function() {
    let node = document.createElement("li"); // 1
    let n = Math.floor(Math.random()*5);
    let text = document.createTextNode(cursos[n]); // 2
    node.addEventListener("click", function(){
        this.remove();
    });
    node.appendChild(text); // 3
    document.getElementById("listaCursos").appendChild(node); // 4
}

// Remover um elemento

// let item = document.getElementById("li1");
// item.onclick = function() {
//     this.remove();
// }

let itens = document.getElementsByTagName("li")
for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener("click", function(){
        this.remove();
    })
}

document.getElementById("b4").onclick = function(){     
    let n = Math.floor(Math.random()*807);
    let link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ n +".png";
    document.getElementById("img2").setAttribute("src", link);
}
