import { useEffect, useState } from "react";
import { Alert, Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { services } from "@/services";
import { Selected } from "@/components/selected";
import { Ingredient } from "@/components/ingredient";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

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
    router.navigate("/recipes/" + selected);
  };

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredient}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            image={`${services.storage.imagePath}/${ingredient.image}`}
            selected={selected.includes(ingredient.id)}
            onPress={() => handleToggleSelected(ingredient.id)}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
