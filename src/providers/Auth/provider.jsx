import { createContext, useReducer } from 'react';
import authReducer from './reducer';

export const initialState = {
  isLoggedIn: false,
  user: {},
};

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
