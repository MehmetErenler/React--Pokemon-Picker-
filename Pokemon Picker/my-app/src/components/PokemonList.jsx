import pokedex from "../Pokedex";
import Pokemons from "./Pokemons";
import './PokemonList.css'
function PokemonList({SelectPokemon,setCenterPokemonName}){
    return(
        <div className="pokemon-list">
            {pokedex.map((pokemon)=>
               <Pokemons key={pokemon.pokemonName} pokemon={pokemon} SelectPokemon={SelectPokemon} setCenterPokemonName={setCenterPokemonName}></Pokemons>
            )}
        </div>
    )
}

export default PokemonList;