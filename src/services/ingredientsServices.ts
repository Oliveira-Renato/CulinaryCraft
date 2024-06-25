import { supabase } from "./supabase";

export async function findsAll() {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .order("name")
    .returns<{ ingredients: IngredientsResponse[] }>();

  return data;
}
