import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });
  const { name, category } = search;

  const [consult, setConsult] = useState(false);

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      };
      getRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <RecipesContext.Provider value={{ searchRecipes, setConsult, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
