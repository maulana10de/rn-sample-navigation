// import Axios from 'axios';
// import {API_URL} from '../support/apiUrl';
import AsyncStorage from '@react-native-community/async-storage';

export const onUserLogin = (username) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'LOADING'});
      await AsyncStorage.setItem('username', username);
      dispatch({
        type: 'USER_LOGIN',
        payload: {username},
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const onKeepLogin = () => {
  return async (dispatch) => {
    try {
      const username = await AsyncStorage.getItem(
        'username',
        (err, results) => {
          return results;
        },
      );
      dispatch({
        type: 'KEEP_LOGIN',
        payload: {username},
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const onUserLogout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('username');
    dispatch({
      type: 'USER_LOGOUT',
    });
  };
};
