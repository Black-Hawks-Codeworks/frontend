import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [{ id: 1, name: 'Nikol Amanatidou', email: 'Amanatidou.doe@example.com', role: 'employee' }],
  technicians: [{ id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'technician' }],
  managers: [{ id: 1, name: 'Jim Doe', email: 'jim.doe@example.com', role: 'manager' }],
  clients: [{ id: 1, name: 'Jill Doe', email: 'jill.doe@example.com', role: 'client' }],

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

export const { setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
