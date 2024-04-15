import { ScrollView } from "react-native"
import { styles } from "./styles"
import { Ingredient } from "../ingredient"
import { useState } from "react"
import { SequencedTransition } from "react-native-reanimated"
import { Selected } from "../selected"

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([])

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  const handleClearSelected = () => {
    setSelected([])
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

      <Selected
        quantity={selected.length}
        onClear={handleClearSelected}
        onSearch={() => { }}
      />
    </ScrollView>
  )
} 