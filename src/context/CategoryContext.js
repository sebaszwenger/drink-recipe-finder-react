import { createContext, useState, useEffect } from "react";
import axios from "axios";

//create the context
export const CategoryContext = createContext();

//Provider
const CategoryProvider = (props) => {
  //create state
  const [categorys, setCategorys] = useState([]);

  //Call API
  useEffect(() => {
    const getCategory = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const category = await axios.get(url);

      setCategorys(category.data.drinks);
    };

    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ categorys }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
