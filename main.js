const fetchPokemons = async (ListPokemon) => {
  for (let i = 1; i <= ListPokemon; i++) {
    await getPokemons(i);
  }
};

const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  createPokemonCard(data);
};

const colors = {
  grass: "#8dd694",
  water: "#8dc6e6",
  fire: "#e69d8d",
  bug: "#bddd7a",
  normal: "#b1b1b1",
  flying: "#c9adec",
  rock: "#b99d72",
  ground: "#efbe85",
  psychic: "#d053bc",
  ghost: "#835e94",
  dark: "#686868",
  steel: "#598fa3",
  poison: "#a55db1",
  electric: "#e7c859",
  fairy: "#eea1e2",
  fighting: "#e07f60",
  dragon: "#8859d5",
  ice: "#71d8de",
};

const mainTypes = Object.keys(colors);

const createPokemonCard = (poke) => {
  const card = document.createElement("div");
  card.classList.add("pokemon");

  const name = poke.name[0].toUpperCase() + poke.name.slice(1);
  const id = poke.id.toString().padStart(1);

  const pokeTypes = poke.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  card.style.backgroundColor = color;

  const pokemonInnerHTML = `
  <div class="imgContainer">
      <img src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
      </div>
  <div class="info">
      <span class="number">${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  card.innerHTML = pokemonInnerHTML;

  pokeContainer.appendChild(card);
};

fetchPokemons();

