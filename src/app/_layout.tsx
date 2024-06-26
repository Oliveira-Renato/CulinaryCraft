import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { IngredientsProvider } from "@/context/IngredientsContext";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    // Aguarda até que as fontes sejam carregadas antes de renderizar qualquer coisa
    return null;
  }

  return (
    <IngredientsProvider>
      <Slot />
    </IngredientsProvider>
  );
}
