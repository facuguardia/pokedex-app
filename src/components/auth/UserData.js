import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenida, </Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={auth.firstname} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={0} />
      </View>

      <Button title="Cerrar sesión" onPress={logout} style={styles.btn}/>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemText}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  itemText: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btn: {
    marginTop: 20,
  },
});
