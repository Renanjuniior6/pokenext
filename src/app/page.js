async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // implementando index em cada pokemon

  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return data.results
}

export default async function Home() {

  const pokemons = await getStaticProps();

  return (
    <div>
        <h1>PokeNext</h1>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
    </div>
  );
}
