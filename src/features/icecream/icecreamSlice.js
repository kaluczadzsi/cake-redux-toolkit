import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restock: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
});

export const icecreamReducer = icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
