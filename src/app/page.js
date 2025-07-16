import Image from 'next/image'
import styles from '../styles/page.module.css'

import Card from '../components/Card'
import { fetchPokemons } from './lib/fetchPokemons'

export default async function Home() {

   const pokemons = await fetchPokemons();

  return (
    <>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Poke
            <span>Next</span>
          </h1>
          <Image src="/images/pokeball.png" width={50} height={50} alt='PokeNext'/>
        </div>
        <div className={styles.pokemon_container}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
    </>
  );
}
