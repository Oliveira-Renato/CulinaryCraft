import * as recipes from "./recipesService";
import * as ingredientes from "./ingredientsServices";
import * as preparations from "./preparationsService";

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath:
      "https://ceeslxlfgpmmetgutdaa.supabase.co/storage/v1/object/public/ingredients",
  },
};
