import { Alert, ScrollView } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles";
import { Ingredient } from "../ingredient";
import { useEffect, useState } from "react";
import { SequencedTransition } from "react-native-reanimated";
import { Selected } from "../selected";
import { services } from "@/services";

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientsResponse[]>([]);

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
  };

  const handleClearSelected = () => {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  };

  const handleSearch = () => {
    router.navigate("/recipes/");
  };

  useEffect(() => {
    services.ingredients.findsAll().then(setIngredients);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((item, index) => (
        <Ingredient
          key={item.id}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={selected.includes(item.id)}
          onPress={() => handleToggleSelected(item.id)}
        />
      ))}

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </ScrollView>
  );
}
