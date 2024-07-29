import { createContext, useState } from "react";

export const FavouritesContext = createContext(null);

export const FavouritesProvider = ({ children }) => {
  const [favouritesValue, setFavouritesValue] = useState([]);
  const addFavourites = (newValue) => {
    setFavouritesValue([...favouritesValue, newValue]);
  };
  const removeFavourites = (id) => {
    const filteredFavourites = favouritesValue.filter(
      (character) => character.id !== id
    );
    setFavouritesValue(filteredFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ addFavourites, removeFavourites, favouritesValue }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
