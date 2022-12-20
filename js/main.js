var elDocRow = document.querySelector(".contener");
var elSelect = document.querySelector(".js-select")
var aaaa = document.querySelector(".aaaa")
var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elA_Z =document.querySelector(".js-a-b")

    function pokemonOutput(array) {
        elDocRow.innerHTML = ""
        for (var list of array) {
            var imgBox = document.createElement("div");
            imgBox.setAttribute("class", "imgBox");
            var pokemonId = document.createElement("h4");
            pokemonId.setAttribute("class", "card-id");
            pokemonId.textContent = `${list.id}.`;
            var pokemonName = document.createElement("h3");
            pokemonName.setAttribute("class", "pokemon-Name");
            pokemonName.textContent = list.name;
            var pokemonImg = document.createElement("img");
            pokemonImg.setAttribute("src", list.img);
            pokemonImg.setAttribute("alt", "pokemon img");
            var pokemonHeight = document.createElement("p");
            pokemonHeight.setAttribute("class", "pokemon-height");
            pokemonHeight.textContent = `Height: ${list.height}`;
            var pokemonWeight = document.createElement("p");
            pokemonWeight.setAttribute("class", "pokemon-weight");
            pokemonWeight.textContent = `Weight: ${list.weight}`;
            var pokemonspawnTime = document.createElement("p");
            pokemonspawnTime.setAttribute("class", "pokemon-spawn-time");
            pokemonspawnTime.textContent = `Spawn time: ${list.spawn_time}`;
            var pokemontype = document.createElement("p");
            pokemontype.setAttribute("class", "pokemon-type");
            pokemontype.textContent = `type: ${list.type}`;
            var card2 = document.createElement("div");
            card2.setAttribute("class", "my_card p-3 m-3 text-center col-3 rounded");

            imgBox.appendChild(pokemonImg);
            card2.appendChild(pokemonId);
            card2.append(pokemonImg);
            card2.appendChild(pokemonName);
            card2.appendChild(pokemonWeight);
            card2.appendChild(pokemonHeight);
            card2.appendChild(pokemontype)
            card2.appendChild(pokemonspawnTime);

            elDocRow.appendChild(card2);
        }
    }
pokemonOutput(pokemons);
const typs = new Set();

for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].type.forEach((el) => {
        typs.add(el)
    })
}
typs.forEach((el) => {
    var elOptions = document.createElement("option")
    elOptions.setAttribute("value", el)
    elOptions.textContent = el
    elSelect.appendChild(elOptions)
});
let newArray = []
elSelect.addEventListener("change", function () {
    newArray = [];

    if (elSelect.value != "All") {
        pokemons.forEach((poc) => {
            if (poc.type.includes(elSelect.value)) {
                newArray.push(poc);
            }
        });
        pokemonOutput(newArray);
    } else {
        pokemonOutput(pokemons);
    }
})

var newArray2 = [];
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    newArray2 = [];
    pokemons.forEach((el) => {
        if (el.name.toLowerCase().includes(elInput.value.toLowerCase())) {
            newArray2.push(el);
        }
    });

    pokemonOutput(newArray2)
});



elA_Z.addEventListener("change", function () {
    if (elA_Z.value == "All") {
        pokemonOutput(pokemons);
    } else if (elA_Z.value == "A-Z") {
        pokemonOutput(
            pokemons.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
        );
    } else if (elA_Z.value == "Z-A") {
        pokemonOutput(
            pokemons.sort((a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0))
        );
    }
});

