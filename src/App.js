import Form from "./components/Form";
import Header from "./components/Header";
import ListRecipes from "./components/ListRecipes";
import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <ListRecipes />
        </div>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
