import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  // name of the reducer
  name: "theme",
  initialState: { value: initialStateValue },
  // alter the values of initialState
  reducers: {
    // state: takes a look at the current state
    // action: payload and type
    changeColor: (state, action) => {
      // change the state value and the action payload
      state.value = action.payload;
    },
  },
});

// actions
export const { changeColor } = themeSlice.actions;

// access reducers
export default themeSlice.reducer;
