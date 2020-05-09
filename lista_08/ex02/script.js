let input_search = document.getElementById("input_search");
let name = document.getElementById("name");
let id = document.getElementById("id");
let types = document.getElementById("types");
let sprite = document.getElementById("sprite");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let update_id = 1;
let status_hp = document.getElementById("status_hp");
let status_atk = document.getElementById("status_atk");
let status_def = document.getElementById("status_def");
let status_spd = document.getElementById("status_spd");
let status_sdef = document.getElementById("status_sdef");
let status_satk = document.getElementById("status_satk");

loadpk(Math.floor(Math.random() * 802 + 1));

function loadpk(pk_name) {
	let url = "https://pokeapi.co/api/v2/pokemon/" + pk_name + "/";
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			newpk(data);
			update_id = data["id"];
		})
		.catch((erro) => {
			alert("Verifique se o ID ou nome está correto.");
			console.log("Erro: " + erro);
		});
}

function send_input() {
	loadpk(input_search.value.toLowerCase());
	input_search.value = "";
	input_search.focus();
}

input_search.addEventListener("keyup", function (event) {
	if (event.key === "Enter") send_input();
	// if (event.key === "ArrowLeft") left_pokemon();
	// if (event.key === "ArrowRight") right_pokemon();
	// if (event.key === "ArrowUp" || event.key === "ArrowDown")
	// 	loadpk(Math.floor(Math.random() * 802 + 1));
});

document.getElementById("btn_search").onclick = function () {
	send_input();
};

document.getElementById("btn_random").onclick = function () {
	loadpk(Math.floor(Math.random() * 802 + 1));
};

function left_pokemon() {
	if (update_id > 1) {
		update_id--;
		loadpk(update_id);
	}
}

function right_pokemon() {
	if (update_id < 802) {
		update_id++;
		loadpk(update_id);
	}
}

document.getElementById("left").onclick = function () {
	left_pokemon();
};

document.getElementById("right").onclick = function () {
	right_pokemon();
};

function newpk(data) {
	name.innerHTML = data["name"];

	id.innerHTML = "#" + ("000" + data["id"]).slice(-3);

	sprite.setAttribute("src", data["sprites"]["front_default"]);

	types.innerHTML = "";

	for (let index = 0; index < data["types"].length; index++) {
		var item = document.createElement("div");
		let n = index + 1;
		let type_id = "type0" + n;
		item.setAttribute("id", type_id);
		item.innerHTML = data["types"][index].type.name;
		types.appendChild(item);
		// dois ultimos digitos são referentes a transparencia
		let type_color = "#" + type_clr(data["types"][index].type.name) + "90";
		document.getElementById(type_id).style.backgroundColor = type_color;
		console.log(type_id);
	}

	height.innerHTML = "Height: " + (data["height"] / 10).toString() + "m";
	weight.innerHTML = "Weight: " + (data["weight"] / 10).toString() + "kg";

	status_update(status_hp, data["stats"][5].base_stat);
	status_update(status_atk, data["stats"][4].base_stat);
	status_update(status_def, data["stats"][3].base_stat);
	status_update(status_spd, data["stats"][0].base_stat);
	status_update(status_satk, data["stats"][2].base_stat);
	status_update(status_sdef, data["stats"][1].base_stat);
}

sprite.onclick = function () {
	if (sprite.getAttribute("src").includes("shiny")) {
		shiny_src = sprite
			.getAttribute("src")
			.replace("pokemon/shiny/", "pokemon/");
	} else {
		shiny_src = sprite
			.getAttribute("src")
			.replace("pokemon/", "pokemon/shiny/");
	}
	sprite.setAttribute("src", shiny_src);
};

function status_update(elem, status) {
	// var elem = document.getElementById("status_hp");
	var width = 0;
	var id = setInterval(frame, 1);
	function frame() {
		if (width >= status) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + "%";
			elem.innerHTML = width;
		}
	}
}

function type_clr(type) {
	if (type == "normal") return "A8A77A";
	if (type == "fire") return "EE8130";
	if (type == "water") return "6390F0";
	if (type == "electric") return "F7D02C";
	if (type == "grass") return "7AC74C";
	if (type == "ice") return "96D9D6";
	if (type == "fighting") return "C22E28";
	if (type == "poison") return "A33EA1";
	if (type == "ground") return "E2BF65";
	if (type == "flying") return "A98FF3";
	if (type == "psychic") return "F95587";
	if (type == "bug") return "A6B91A";
	if (type == "rock") return "B6A136";
	if (type == "ghost") return "735797";
	if (type == "dragon") return "6F35FC";
	if (type == "dark") return "705746";
	if (type == "steel") return "B7B7CE";
	if (type == "fairy") return "D685AD";
}
