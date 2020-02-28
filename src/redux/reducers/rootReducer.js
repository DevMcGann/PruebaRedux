import {combineReducers} from 'redux';

import DrinkReducer from './DrinkReducer';


const rootReducer = combineReducers({
  drinksArray: DrinkReducer
});

export default rootReducer;