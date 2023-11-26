import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from './reducers/ThemeSlice'
import TempSlice from './reducers/TempSlice'
export const store = configureStore({
  reducer: {
    theme : ThemeSlice,
    temp : TempSlice
  },
})