import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredient, IngredientsProps } from "../ingredient";
import { services } from "@/services";

type Props = {
  ingredients?: IngredientsProps[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients &&
        ingredients.map((item, index) => (
          <Ingredient
            key={item.name}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
          />
        ))}
    </ScrollView>
  );
}
