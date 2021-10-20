import { createContext, useState, useEffect } from "react";
import axios from "axios";

//create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //State of provider
  const [idRecipe, setIdRecipe] = useState(null);
  const [infoRecipe, setinfoRecipe] = useState({});

  //once we have a recipe we call the API
  useEffect(() => {
    if (idRecipe) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

        const result = await axios.get(url);
        setinfoRecipe(result.data.drinks[0]);
      };
      getRecipes();
    }
  }, [idRecipe]);
  return (
    <ModalContext.Provider value={{ setIdRecipe, infoRecipe, setinfoRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
