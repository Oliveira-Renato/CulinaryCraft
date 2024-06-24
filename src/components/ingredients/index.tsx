import { Alert, ScrollView } from "react-native"
import {router} from "expo-router"
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
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel"},
      { text: "Sim", onPress: () => setSelected([])}
    ])
  }

  const handleSearch = () => {
    router.navigate("/recipes/")
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

      {
        selected.length > 0 && (
          <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
        )
      }
    </ScrollView>
  )
} 