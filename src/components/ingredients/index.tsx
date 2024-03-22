import { ScrollView } from "react-native"
import { styles } from "./styles"
import { Ingredient } from "../ingredient"
import { useState } from "react"

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index} name="Maça" image="" selected onPress={() => { }} />
      ))}
    </ScrollView>
  )
} 