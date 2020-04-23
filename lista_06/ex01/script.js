const lista = document.getElementsByTagName("li");
const divs = document.getElementsByTagName("div");

for(let i = 0; i < lista.length; i++) {

    divs[i].style.background = random_bg_color();

    lista[i].onclick = function () {        

        if (divs[i].style.visibility == 'hidden') {
            divs[i].style.visibility = 'visible';
        }
        else {
            divs[i].style.visibility = 'hidden';
        }

    }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return"rgb(" + x + "," + y + "," + z + ")";
}