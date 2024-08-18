document
  .getElementById("browserButton")
  .addEventListener("click", async function () {
    const input = document
      .getElementById("pokemonName")
      .value.toLowerCase()
      .trim();
    if (!input) {
      alert("Por favor, ingresa un nombre o número de Pokémon.");
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (response.ok) {
      const data = await response.json();
      displayPokemonInfo(data);
    } else {
      document.getElementById("pokemonInfo").innerText =
        "Pokémon no encontrado.";
    }
    let pokemonInfo = document.getElementById("pokemonInfo");
    pokemonInfo.style.backgroundColor = "#75a47f";
    let card = document.getElementById("card");
    card.style.visibility = "visible";
  });

function displayPokemonInfo(data) {
  const pokemonInfoDiv = document.getElementById("pokemonInfo");
  pokemonInfoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Número de la Pokédex: ${data.id}</p>
        <p>Altura: ${data.height / 10} m</p>
        <p>Peso: ${data.weight / 10} kg</p>
        <p>Tipos: ${data.types
          .map((typeInfo) => typeInfo.type.name)
          .join(", ")}</p>
    `;
}
