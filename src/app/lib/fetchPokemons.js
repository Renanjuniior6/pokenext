export async function fetchPokemons() {

  const maxPokemons = 151
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // implementando index em cada pokemon

  data.results.forEach((item, index) => {
    item.id = index + 1

  });

  return data.results
}