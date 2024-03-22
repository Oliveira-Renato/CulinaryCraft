import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";
import React from "react";

export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={require("@/assets/maca.png")} />

      <Text style={styles.title}>Maça</Text>
    </Pressable>
  )
} 