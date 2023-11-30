import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: !localStorage.getItem('favorites') ? [] : JSON.parse(localStorage.getItem('favorites')),
}

export const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state,data) => {
      state.value.push({...data.payload})
    },
    removeFavorite: (state, data) => {
      state.value = state.value.filter((favorite) => favorite.id !== data.payload)
    }
  },
})

export const { addFavorite, removeFavorite } = FavoritesSlice.actions

export default FavoritesSlice.reducer