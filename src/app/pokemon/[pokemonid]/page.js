'use client'
import { useParams } from "next/navigation";
import { fetchPokemons } from "../../lib/fetchPokemons"

const getPokemons = async () => {

  const pokemons = await fetchPokemons();
  // Params
  const paths = pokemons.map((pokemon, index) => {
    
     let pokemonid
     return pokemonid = (index + 1).toString()
  });  

  // Get pokemon by id
//   const id = paths
const params = useParams();
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonid}`) 
  const data = res.json();

//   console.log(data)

  return data

}

export default async function Pokemon() {

    const pokemon = await getPokemons();

    console.log(pokemon.name)

    return (
        <p>Testando tela do</p>
    )
}