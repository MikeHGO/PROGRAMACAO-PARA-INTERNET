let ul = document.getElementById("ulist");

let n = Math.floor(Math.random()*100)+1;
console.log(n);

document.getElementById("btn").onclick = function () {
    let numero = document.getElementById("textbox").value;
    let li = document.createElement("li");
    
    if (numero < n) {
        numero = numero+" é muito baixo";
    }
    else if (numero > n) {
        numero = numero+" é muito alto";
    }
    else if (numero == n) {
        numero = numero+" é o numero certo!"
    }

    li.appendChild(document.createTextNode(numero));
    ul.appendChild(li);
}
