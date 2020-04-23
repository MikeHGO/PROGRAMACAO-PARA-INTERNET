let ul = document.getElementById("ulist");

document.getElementById("icon").onclick = function () {
    let texto = document.getElementById("textbox").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(texto));
    ul.appendChild(li);
}
