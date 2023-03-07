import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { capitalize } from "lodash";

import getColorPokemonType from "../utils/getColorPokemonType";

import { useNavigation } from "@react-navigation/native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  console.log(pokemon.image);
  const navigation = useNavigation();

  const pokemonColor = getColorPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.title}>{capitalize(pokemon.name)}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});
