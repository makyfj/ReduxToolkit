import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  // name of the reducer
  name: "user",
  initialState: { value: initialStateValue },
  // alter the values of initialState
  reducers: {
    // state: takes a look at the current state
    // action: payload and type
    login: (state, action) => {
      // change the state value and the action payload
      state.value = action.payload;
    },
    // logout doesn't take a payload because there is not action
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

// access actions
export const { login, logout } = userSlice.actions;

// access reducers
export default userSlice.reducer;
