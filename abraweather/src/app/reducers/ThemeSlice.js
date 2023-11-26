import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "light",
}

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state) => {
      state.value === "dark" ? state.value = "light" : state.value = "dark"
    },
    // toLight: (state) => {
    //   state.value = "light"
    // },
  },
})
export const selectTheme = (state) => state.theme.value
export const { change } = ThemeSlice.actions

export default ThemeSlice.reducer