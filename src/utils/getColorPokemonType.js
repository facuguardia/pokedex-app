import { POKEMON_TYPE_COLORS } from "./constants";

const getColorPokemonType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
};

export default getColorPokemonType;