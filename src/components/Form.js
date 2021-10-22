import { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { RecipesContext } from "../context/RecipesContext";

import Error from "./Error";

const Form = () => {
  //useStates
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const [error, setError] = useState(false);

  //Extract data from search
  const { name, category } = search;

  //Extract data from useContexts
  const { categorys } = useContext(CategoryContext);
  const { searchRecipes, setConsult } = useContext(RecipesContext);

  //function to save the form data
  const getDataRecipe = (e) => {
    e.preventDefault();
    //validate empty inputs
    if (name.trim() === "" || category.trim() === "") {
      setError(true);
      setConsult(false);

      return;
    }
    setError(false);
    setConsult(true);
    searchRecipes(search);
  };

  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-12" onSubmit={getDataRecipe}>
      <fieldset className="text-center">
        <legend>Search Drinks by Category or by Ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Search by Ingredient"
            onChange={updateState}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            placeholder="Category"
            onChange={updateState}
          >
            <option value="" hidden>
              -- Select Category --
            </option>

            {categorys.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Find Drink"
          />
        </div>
      </div>
      {error ? <Error message="Todos los Campos son Obligatorios" /> : null}
    </form>
  );
};

export default Form;
