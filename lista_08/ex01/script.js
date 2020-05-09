let name = document.getElementById("name");
let id = document.getElementById("id");
let types = document.getElementById("ulist");
let sprite = document.getElementById("sprite");
let update_id = 1;

loadpk(1);

function loadpk(pk_name) {
	let url = "https://pokeapi.co/api/v2/pokemon/" + pk_name + "/";
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			newpk(data);
		})
		.catch((erro) => {
			console.log("Erro: " + erro);
		});
}

document.getElementById("left").onclick = function () {
	if (update_id > 1) {
		update_id--;
		console.log(update_id);
		loadpk(update_id);
	}
};

document.getElementById("right").onclick = function () {
	if (update_id < 802) {
		update_id++;
		console.log(update_id);
		loadpk(update_id);
	}
};

function newpk(data) {
	name.innerHTML = data["name"];
	id.innerHTML = data["id"];
	sprite.setAttribute("src", data["sprites"]["front_default"]);
	types.innerHTML = "";
	for (let index = 0; index < data["types"].length; index++) {
		var item = document.createElement("li");
		item.innerHTML = data["types"][index].type.name;
		types.appendChild(item);
	}
	console.log(types.lastChild.innerHTML);
}
