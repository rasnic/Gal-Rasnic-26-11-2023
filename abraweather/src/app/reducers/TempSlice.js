import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "cel",
}

export const TempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    change: (state) => {
      state.value === "cel" ? state.value = "fahr" : state.value = "cel"
    },
  },
})
export const selectTheme = (state) => state.temp.value
export const { change } = TempSlice.actions

export default TempSlice.reducer