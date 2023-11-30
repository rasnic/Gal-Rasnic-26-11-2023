import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: !localStorage.getItem('temp') ? "cel" : localStorage.getItem('temp') === 'cel' ? "cel" : "fahr",
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
export const { change } = TempSlice.actions

export default TempSlice.reducer