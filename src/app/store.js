import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import beerHouseReducer from '../app/pages/beerhouse/BeerHouseSlice'
import beerInformationReducer from '../app/pages/beerInformation/BeerInformationSlice'

export default configureStore({
  reducer: {
    beerHouse: beerHouseReducer,
    beerInformation: beerInformationReducer
  },
});
