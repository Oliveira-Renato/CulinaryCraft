import { ScrollView } from "react-native"
import { styles } from "./styles"
import { Ingredient } from "../ingredient"
import { useState } from "react"

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index}
          name="Maça"
          image=""
          selected={selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))} />
      ))}
    </ScrollView>
  )
} 