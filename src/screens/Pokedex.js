import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  // Estado para guardar los pokemons
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  // Estado para guardar el pokemon seleccionado
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  // Función para cargar los pokemons
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
