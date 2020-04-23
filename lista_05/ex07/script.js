let elementos = document.getElementById("01").children;

document.getElementById("btn01").onclick = function() {
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
    }
}

document.getElementById("btn02").onclick = function() {
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "gray";
    }
}