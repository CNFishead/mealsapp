import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFavorite: () => {},
});

// create a functional component called FavoritesContextProvider

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (id) => {
    setFavorites((prevState) => [id, ...prevState]);
  };
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favorite) => favorite !== id));
  };
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
