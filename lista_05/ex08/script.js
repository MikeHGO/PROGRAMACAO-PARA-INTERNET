
let nomes = "Belkis Rosalva Carisa Julee Blair Kristopher Ramona Evonne Rosario Santina Lashunda Evita Jamel Garrett Mariella Leatrice Chet Sammy Naoma Leeanne".split(" ");
let tabela = document.getElementById("01");

document.getElementById("btn01").onclick = function() {
    let linha = tabela.insertRow(tabela.rows.length);
    let nome = linha.insertCell(0);
    let tel = linha.insertCell(1);
    nome.innerHTML = nomes[(Math.random() * 20).toFixed()];
    tel.innerHTML = Math.floor(Math.random() * 9999);    
}

document.getElementById("btn02").onclick = function() {
    tabela.deleteRow(tabela.rows.length - 1);
}