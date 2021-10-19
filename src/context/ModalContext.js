import { createContext, useState, useEffect } from "react";
import axios from "axios";

//create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //State of provider
  const [idRecipe, setIdRecipe] = useState(null);

  return (
    <ModalContext.Provider value={{ setIdRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
