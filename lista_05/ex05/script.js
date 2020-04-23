// let size = document.querySelectorAll('.row_color').length;
let linhas = document.getElementsByClassName("row_color");

document.getElementById("btn01").onclick = function() {
    for (let i = 0; i < linhas.length; i++) {
        linhas[i].style.backgroundColor = "gray"
    }
}

document.getElementById("btn02").onclick = function() {
    for (let i = 0; i < linhas.length; i++) {
        linhas[i].style.backgroundColor = "initial";
    }
}