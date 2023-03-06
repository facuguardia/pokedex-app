import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitalize, map } from "lodash";
import getColorPokemonType from "../../utils/getColorPokemonType";


export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.container}>
      {map(types, (item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorPokemonType(item.type.name)}}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
