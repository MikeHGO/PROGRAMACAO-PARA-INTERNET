// Linhas 39 e 84 para alterar a quantidade de pokemons e cronometro.
const generation = [
	// Lista de gerações pokémon
	{ name: 1, start: 1, amount: 151 },
	{ name: 2, start: 152, amount: 100 },
	{ name: 3, start: 252, amount: 135 },
	{ name: 4, start: 387, amount: 107 },
	{ name: 5, start: 494, amount: 156 },
	{ name: 6, start: 650, amount: 72 },
	{ name: 7, start: 722, amount: 80 },
	// { name: 8, start: 810, amount: 85 }, nao funciona com a pokeapi
];

let CARTELA = document.getElementById("cartela");
let BINGO_btn = document.getElementById("btn");
let DIV_SORTEADO = document.getElementById("new_number");
let DIV_COUNT = document.getElementById("countdown");
let array_cartela = [];
let array_cartela_backup = [];
let array_total = [];
let array_total_sorteados = [];
let countdown;

function random_number(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function check_rmv(array, num) {
	const index = array.indexOf(num);
	if (index > -1) {
		// remover a partir de index, n# itens
		array.splice(index, 1);
	}
}

function preencher_arrays(gen) {
	// INICIO E TOTAL DE POKEMON DA GERACAO ESCOLHIDA <<<
	let inicio = generation[gen].start;
	let qtd = generation[gen].amount;

	// preenche o array_total com os IDs da geracao escolhida
	for (let index = 0; index < qtd; index++) {
		array_total[index] = inicio;
		inicio++;
	}
	// selecionando numeros aleatorios para a cartela
	CARTELA.innerHTML = "";
	for (let index = 0; index < 16; index++) {
		let num = random_number(0, array_total.length - 1);
		array_cartela[index] = array_total[num];
		array_total.splice(num, 1);

		let new_pokemon = `<div class="pokemon">
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${array_cartela[index]}.png" alt=""/></div>`;
		CARTELA.insertAdjacentHTML("beforeend", new_pokemon);
	}

	array_cartela_backup = [...array_cartela];
	// repreenchendo o array_total com os pokemon da cartela
	array_total = array_total.concat(array_cartela);
}

function start(gen) {
	// Set up cartela e arrays
	preencher_arrays(gen);

	// set up contador
	countdown = 999;
	DIV_COUNT.innerHTML = countdown;

	// vai pro sorteio
	timed_loop();
}
var sorteio_intervalo;

function timed_loop() {
	sorteio_intervalo = setInterval(atualiza_contador, 10);
}

function atualiza_contador() {
	DIV_COUNT.innerHTML = countdown;
	if (countdown == 0) {
		// Gera novo pokemon a cada 5 segundos
		countdown = 411;
		gera_novo_pk();
	}
	countdown--;
}

function gera_novo_pk() {
	// se o array estiver vazio todos os pokemon já foram sortedos, portanto, finaliza o jogo.
	if (array_total.length == 0) {
		return finish(false);
	}
	// sortei um index aleatorio
	let index = random_number(0, array_total.length - 1);
	// armazena o valor do index sorteado
	let num = array_total[index];
	// atualiza o display com o novo pokemon
	DIV_SORTEADO.src =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
		num +
		".png";
	// remove o index sorteado
	array_total.splice(index, 1);
	// checa o array_cartela e remove o pk caso esteja lá
	check_rmv(array_cartela, num);
	// insere no array de sorteados
	array_total_sorteados.push(num);
}

BINGO_btn.onclick = function () {
	clearInterval(sorteio_intervalo);
	// verifica se a cartela está preenchida e se todos os numeros foram sorteados
	if (
		document.getElementsByClassName("check").length == 16 &&
		array_cartela.length == 0
	) {
		return finish(true);
	}
	// Marca um X no cronometro
	DIV_COUNT.innerHTML = "X";

	// desabilita o botao para evitar clicks antes do setTimeout(time_loop) ser executado
	this.disabled = true;
	setTimeout(timed_loop, 600);
	// delay para reativar o botao
	setTimeout(function () {
		BINGO_btn.disabled = false;
	}, 800);
};

document.getElementById("cartela").addEventListener("click", function (event) {
	let element = event.target;
	// toggle (insere/remove) classe check nos elementos da cartela para marca-los
	if (element.tagName == "IMG") {
		element.parentNode.classList.toggle("check");
	} else if (element.classList.contains("pokemon")) {
		element.classList.toggle("check");
	}
});

function finish(flag) {
	// pausa o cronometro
	clearInterval(sorteio_intervalo);

	// altera os textos e botao do primeiro menu
	let menu = document.getElementById("menu");
	document.getElementById("start").innerHTML = "AGAIN";
	if (flag == true) {
		menu.innerHTML = "YOU\nWIN";
		menu.style.color = "goldenrod";
	} else {
		menu.innerHTML = "YOU\nLOSE";
		menu.style.color = "silver";
	}
	// mostra a tela final
	document.querySelector(".start").style.display = "flex";
	document.querySelector(".container").style.display = "none";
}

function main_menu() {
	document.querySelector(".container").style.display = "flex";
	document.querySelector(".start").style.display = "none";
	let gen = document.querySelector('input[name="gen"]:checked').value - 1;

	start(gen);
}

document.getElementById("start").onclick = function () {
	main_menu();
};

// desativar botão direito
document.addEventListener("contextmenu", (event) => event.preventDefault());
