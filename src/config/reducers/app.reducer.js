import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

// Only export the action creators that actually exist on the slice.
export const { setTheme } = appSlice.actions;

export const appReducer = appSlice.reducer;
