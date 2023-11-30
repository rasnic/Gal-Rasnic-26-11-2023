import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './reducers/ThemeSlice'
import TempSlice from './reducers/TempSlice'
import FavoritesSlice from './reducers/FavoritesSlice'
export const store = configureStore({
  reducer: {
    theme : ThemeSlice,
    temp : TempSlice,
    favorites: FavoritesSlice
  },
})