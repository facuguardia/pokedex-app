import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
