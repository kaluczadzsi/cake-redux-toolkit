import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
      return state;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
      return state;
    },
  },
});

export const cakeReducer = cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
