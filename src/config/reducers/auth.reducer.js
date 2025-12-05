import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  employees: [
    {
      id: 1,
      username: 'nikol',
      password: '123456',
      name: 'Nikol Amanatidou',
      email: 'nikol.amanatidou@example.com',
      role: 'employee',
    },
  ],
  technicians: [
    {
      id: 1,
      username: 'ilias',
      password: '123456',
      name: 'Ilias Mazarakis',
      email: 'ilias.mazarak@example.com',
      role: 'technician',
    },
  ],
  managers: [
    {
      id: 1,
      username: 'vasiliki',
      password: '9dahtila',
      name: 'Vasiliki Zarladaki',
      email: 'vasiliki.zarladaki@example.com',
      role: 'manager',
    },
  ],
  clients: [
    {
      id: 1,
      username: 'danis',
      password: '123456',
      name: 'Danis Litze',
      email: 'danis.litze@example.com',
      role: 'client',
    },
  ],

  user: null,
};

export const authSlice = createSlice({
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
