
import { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  const [centerPokemon,setCenterPokemon] =useState("")
  const [centerPokemonName,setCenterPokemonName] =useState("")

  function SelectPokemon(newPokemon){
    
    setCenterPokemon(newPokemon.imgUrl)
    setCenterPokemonName(newPokemon.pokemonName)
  }
  return (
    <div className="App">
        <h1>Choose Your Pokemon</h1>
        <div className='center-wrapper'><img src={centerPokemon} alt="" />
        </div>
        <p>Your Coice is :  {centerPokemonName}</p>
        <PokemonList SelectPokemon={SelectPokemon} setCenterPokemonName={setCenterPokemonName}></PokemonList>
    </div>
  );
}

export default App;
