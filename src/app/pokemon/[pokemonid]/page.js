export default async function Pokemon({ params }) {

  const { pokemonid } = await params // está pegando o meu id no query params passado através do Link
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
  const pokemon = await res.json();

    return (
        <p>Testando tela do pokemon #{pokemon.name}</p>
    )
}