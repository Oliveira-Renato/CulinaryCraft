import { ScrollView } from "react-native"
import { styles } from "./styles"
import { Ingredient } from "../ingredient"

export function Ingredients() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index} />
      ))}
    </ScrollView>
  )
} 