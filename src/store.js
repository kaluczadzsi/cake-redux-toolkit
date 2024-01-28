import { configureStore } from '@reduxjs/toolkit';
import { cakeReducer } from './features/cake/cakeSlice';
import { icecreamReducer } from './features/icecream/icecreamSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
