import { IngredientsProps } from "@/components/ingredient";
import React, { createContext, useContext, useState } from "react";

interface RecipeContextType {
  ingredients: IngredientsProps[] | undefined;
  setIngredients: (ingredients: IngredientsProps[] | undefined) => void;
}

const IngredientsContext = createContext<RecipeContextType | undefined>(
  undefined
);

export const useIngredientsContext = () => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error(
      "useIngredientsContext must be used within a IngredientsProvider"
    );
  }
  return context;
};

export const IngredientsProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [ingredients, setIngredients] = useState<
    IngredientsProps[] | undefined
  >(undefined);

  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};
