import { LOGIN, LOGOUT } from './actions';

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true, user: action.payload };
    case LOGOUT:
      return { isLoggedIn: false, user: {} };
    default:
      throw new Error();
  }
}

export default authReducer;
