import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import symbolOn from "./assets/pictures/symbol-on.png";
import symbolOff from "./assets/pictures/symbol-off.png";

export default function App() {
  const [isActive, setActive] = useState(false);
  const handleSymbol = () => setActive((oldValue) => !oldValue);

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
