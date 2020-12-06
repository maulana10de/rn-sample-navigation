import Axios from 'axios';
import {API_URL} from '../support/apiUrl';

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      const results = await Axios.get(
        API_URL + `/search?start=1&count=30&sort=rating`,
        {
          headers: {
            'user-key': `e94c6a808accef2adc62589026defd48`,
          },
        },
      );
      let resto = [];
      results.data.restaurants.forEach((element) => {
        if (element.restaurant.featured_image.length > 0) {
          resto.push(element.restaurant);
        }
      });

      // console.log('Data ==>', results.data.restaurants);
      dispatch({
        type: 'GET_RESTAURANT',
        payload: resto,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
