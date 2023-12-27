import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducers/favoritesReducer";

export const store = configureStore({
  reducer: { favorites: favoritesReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});
