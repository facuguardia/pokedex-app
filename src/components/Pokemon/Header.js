import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { capitalize } from "lodash";
import getColorPokemonType from "../../utils/getColorPokemonType";

export default function Header(props) {
  const { name, order, image, type } = props;

  const color = getColorPokemonType(type);

  const bgStyles = [
    {
      backgroundColor: color,
      ...styles.bg
    }
  ];

  return (
    <>
      <View style={bgStyles}/>

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>

        </View>
        <View style={styles.contentImg}>
          <Image source={{uri: image}} styles={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  bg: {
    height: 400,
    width: "100%",
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    rizeMode: "contain",
  },
});