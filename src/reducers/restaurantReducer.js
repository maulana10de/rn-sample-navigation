const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT':
      // console.log('CHECK REDUCER', action.payload);
      return action.payload;
    default:
      return state;
  }
};
