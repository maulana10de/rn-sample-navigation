const INITIAL_STATE = {
  username: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      // console.log('CHECK REDUCER LOGIN :', action.payload);
      return {...state, username: action.payload.username};
    case 'LOADING':
      return {...state, loading: true};
    case 'KEEP_LOGIN':
      // console.log('CHECK REDUCER LOGIN :', action.payload);
      return {...state, username: action.payload.username};
    case 'USER_LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
