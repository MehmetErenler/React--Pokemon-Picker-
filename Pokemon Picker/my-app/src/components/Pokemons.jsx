import './Pokemons.css'

function Pokemons({pokemon,SelectPokemon}){
    return(
        <div className="pokemon-box">
            <img src={pokemon.imgUrl} alt="" onClick={()=>SelectPokemon(pokemon)} />
        </div>
    )
}

export default Pokemons;