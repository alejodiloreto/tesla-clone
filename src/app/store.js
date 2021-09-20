import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlices';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
