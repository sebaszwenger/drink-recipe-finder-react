import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    scroll: { maxHeight: "500px", overflowY: "scroll", overflowX: "none" },
  },
}));

const Recipe = ({ recipe }) => {
  //material-ui modal configuration
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Extract context data
  const { setIdRecipe, infoRecipe, setinfoRecipe } = useContext(ModalContext);

  //display and format ingredients
  const showIngredients = (infoRecipe) => {
    let ingredients = [];
    for (let i = 0; i < 16; i++) {
      if (infoRecipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {infoRecipe[`strIngredient${i}`]} {infoRecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>

        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
        />

        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            See Recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null);
              setinfoRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <div className={classes.scroll}>
                <h2>{infoRecipe.strDrink}</h2>
                <h3 className="mt-4">Instructions</h3>
                <p>{infoRecipe.strInstructions}</p>

                <img
                  className="img-fluid my-4"
                  src={infoRecipe.strDrinkThumb}
                  alt={infoRecipe.strDrink}
                />

                <h3>Ingredients & Quantities</h3>
                <ul>{showIngredients(infoRecipe)}</ul>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
