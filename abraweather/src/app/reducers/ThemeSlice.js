import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: !localStorage.getItem('theme') ? "light" : localStorage.getItem('theme') === 'light' ? "light" : "dark"
}

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value === "dark" ? state.value = "light" : state.value = "dark"
    },
  },
})
export const { changeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer