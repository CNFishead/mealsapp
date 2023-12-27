import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload.id);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((favorite) => favorite !== action.payload.id);
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
