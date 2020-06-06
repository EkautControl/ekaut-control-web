import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import beerHouseReducer from '../app/pages/beerhouse/BeerHouseSlice'

export default configureStore({
  reducer: {
    beerHouse: beerHouseReducer
  },
});
