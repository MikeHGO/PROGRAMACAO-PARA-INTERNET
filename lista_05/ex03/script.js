document.getElementById("btn01").onclick = function() {
    let texto_01 = document.getElementById("01").innerHTML;
    document.getElementById("01").innerHTML = document.getElementById("02").innerHTML;
    document.getElementById("02").innerHTML = texto_01;    
}