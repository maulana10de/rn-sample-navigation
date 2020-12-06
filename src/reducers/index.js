import {combineReducers} from 'redux';
import RestaurantReducer from './restaurantReducer';
import LoginReducer from './loginReducer';

export default combineReducers({
  RestaurantReducer,
  LoginReducer,
});
