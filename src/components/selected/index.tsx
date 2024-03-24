import Animated from "react-native-reanimated"
import { Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type SelectedProps = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  return (
    <Animated.View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados.</Text>
        <MaterialIcons name="close" size={24} onPress={onClear} />
      </View>
    </Animated.View>
  )
}