import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para ver tus favoritos tienes que iniciar sesión
      </Text>
      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
