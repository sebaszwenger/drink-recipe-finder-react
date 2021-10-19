import { createContext, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });

  return (
    <RecipesContext.Provider value={{ searchRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
