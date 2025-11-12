import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

// Only export the action creators that actually exist on the slice.
export const { setTheme } = authSlice.actions;

export const appReducer = authSlice.reducer;
