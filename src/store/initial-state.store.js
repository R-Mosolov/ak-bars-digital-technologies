// TODO: Delete Node-fetch library before code review
const fetch = require("node-fetch");

let initialState = [];
const MAX_PAGES_COUNT = 30;

// Get pokemons names
fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${MAX_PAGES_COUNT}`)
  .then((res) => res.json())
  .then((res) => res.results.forEach(
    (pokemon) => initialState.push({
      name: pokemon.name
    })
  ));

for (let i = 1; i <= MAX_PAGES_COUNT; i += 1) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((res) => res.json())
    .then((pokemon) => {
      let currentElement = initialState[i - 1];

      // Get pokemons types
      currentElement.types = Object
        .values(pokemon.types)
        .map((content) => content.type.name);

      // Get pokemons abilities
      currentElement.abilities = {};
      currentElement.abilities.name = Object
        .values(pokemon.abilities)
        .map((content) => content.ability.name);
      currentElement.abilities.url = Object
        .values(pokemon.abilities)
        .map((content) => content.ability.url);

      return;
    })

    .then(() => { if (i === MAX_PAGES_COUNT) return console.log(initialState) });
}

// Get abilities description
// ...