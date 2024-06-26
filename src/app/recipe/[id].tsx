import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Redirect, router, useLocalSearchParams } from "expo-router";

import { services } from "@/services";

import { styles } from "./styles";
import { Step } from "@/components/Step";
import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/ingredients";
import { useIngredientsContext } from "@/context/IngredientsContext";

export default function Preparation() {
  const { ingredients } = useIngredientsContext();
  console.log(ingredients);
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [preparations, setPreparations] = useState<PreparationsResponse[]>([]);

  type paramProps = {
    id: string;
  };

  const { id } = useLocalSearchParams<paramProps>();

  useEffect(() => {
    id &&
      services.recipes
        .show(id)
        .then((response) => setRecipe(response))
        .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    id &&
      services.preparations
        .findByRecipeId(id)
        .then((response) => setPreparations(response));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!id || !recipe) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={32}
            name="arrow-back"
            onPress={() => router.back()}
          />

          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
        </View>

        <Ingredients ingredients={ingredients} />

        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparado</Text>

          <FlatList
            data={preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
